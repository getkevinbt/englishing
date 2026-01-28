import fsPromise from "fs/promises";

import { cloudinary } from "../helpers/cloudinary.js";
import {
    FillBlank,
    Match,
    PicsToWord,
    Unit,
    User,
    WordScramble,
    WordSearch,
} from "../models/index.js";
import { generateJWT } from "../helpers/generateJWT.js";

import TYPE_MAP from "../helpers/exerciseTypeMap.js";

export const checkAnswer = async (req, res) => {
    const { type } = req.params;
    try {
        const response = await CHECK_FUNCTIONS[type](req);
        return res.json(response);
    } catch (error) {
        if (error.message === "default missing")
            return res.status(400).json({
                msg: "the endpoint /api/exercise/:type/:id must be call at least once before calling this one",
            });

        if (error.message === "wrong answer")
            return res.json({
                msg: "wrong answer",
            });

        console.error("checking exercise answer", error);

        return res.status(500).json({ msg: "internal server error" });
    }
};
export const create = async (req, res) => {
    const {
        body: { newToken, type, user, data },
        params: { pos, id },
    } = req;

    let exercise;

    try {
        exercise = await CONSTRUCTORS_FUNCTIONS[type](data);

        if (exercise === false && type === "WordSearch")
            return res
                .status(422)
                .json({ msg: "impossible to create a word-search exercise" });
        else if (exercise === undefined) {
            return res
                .status(500)
                .json({ msg: "internal server error - creating exercise" });
        }

        await exercise.save();

        const unit = await Unit.findById(id);

        unit.exercises.splice(
            pos === "e" ? unit.exercises.length : Number(pos) - 1,
            0,
            { item: exercise._id, kind: type },
        );
        unit.history.push({ user: user.id, action: "update" });
        await unit.save();

        let response = { exercise, unit };

        if (newToken) {
            const { token, expiresAt } = await generateJWT(user);
            response = {
                ...response,
                expiresAt,
                msg: "token renewed",
                token,
            };
        }
        return res.status(201).json(response);
    } catch (error) {
        console.error("creating exercise", error);

        try {
            await exercise.deleteOne();
        } catch (cleanupError) {
            console.error("cleanup error", cleanupError);
        }

        return res
            .status(500)
            .json({ msg: "internal server error - creating exercise" });
    }
};
export const deleteById = async (req, res) => {
    const { id, type } = req.params;
    try {
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await TYPE_MAP[type].findById(id);

        if (!unit) {
            console.error("unit not found", id, type);
            return res.status(500).json({ msg: "unit not found" });
        } else if (!unit.exercises || unit.exercises.length === 0)
            return res.status(400).json({ msg: "unit.exercises is empty" });

        const exercisePos = unit.exercises.findIndex(
            (e) => e.item.toString() === id,
        );

        if (exercisePos === -1) {
            console.error("exercise not found in unit", id, type);
            return res.status(500).json({ msg: "internal server error" });
        }

        unit.exercises.splice(exercisePos, 1);
        unit.history.push({ user: req.body.user.id, action: "update" });

        await exercise.deleteOne();
        await unit.save();

        const usersToUpdate = await User.find({
            "solution_progress.exercises.exercise": id,
        }).select("solution_progress");

        await Promise.all(
            usersToUpdate.map(async (u) => {
                const unitIndex = u.solution_progress.findIndex(
                    (sp) => sp.unit.toString() === unit._id.toString(),
                );

                if (unitIndex === -1) return;

                const exerciseIndex = u.solution_progress[
                    unitIndex
                ].exercises.findIndex((e) => e.exercise.toString() === id);

                if (exerciseIndex === -1) return;

                u.solution_progress[unitIndex].exercises.splice(
                    exerciseIndex,
                    1,
                );

                await u.save();
            }),
        );

        return res.json({
            exercise,
            msg: `exercise at position ${exercisePos + 1} deleted`,
        });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ msg: "internal server error - deleting exercise" });
    }
};
//TODO: fix when an user request the exercise, check the authority level, and, if is a common user avoid sending the answers.
export const getById = async (req, res) => {
    const { type, id } = req.params;
    const {
        user: { id: userId },
    } = req.body;
    try {
        const exercise = await TYPE_MAP[type].findById(id);
        const user = await User.findById(userId);
        const unit = await Unit.findOne({ "exercises.item": id });

        if (!user.solution_progress) user.solution_progress = [];

        if (!user.solution_progress[unit.number - 1]?.unit?.equals(unit._id))
            user.solution_progress[unit.number - 1].unit = unit._id;

        const exerciseIndex = unit.exercises.findIndex(
            (e) => e.item.toString() === id,
        );

        if (exerciseIndex === -1) {
            console.error("exercise not found in unit", id, type);

            return res.status(500).json({ msg: "internal server error" });
        }

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (exerciseProgressIndex === -1) {
            console.error("exercise link not found in user", id, type);
            return res.status(500).json({ msg: "internal server error" });
        }

        if (
            !user.solution_progress[unit.number - 1].exercises[exerciseIndex]
                .progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[exerciseIndex]
                    .progress,
            ).length === 0
        ) {
            user.solution_progress[unit.number - 1].exercises[exerciseIndex] = {
                exercise: exercise._id,
                progress: await exercise.getDefaultForUsers(),
                completed: false,
            };

            await user.save();
        }

        return res.json({
            ...(await exercise.getPublicFields()),
            ...(await user.getProgressData(unit.number, exerciseIndex)),
            type,
        });
    } catch (error) {
        console.error("fetching exercise by id", error);

        return res.status(500).json({ msg: "internal server error" });
    }
};

const CONSTRUCTORS_FUNCTIONS = {
    FillBlank: async ({ difficulty, text, thematic }) =>
        new TYPE_MAP["FillBlank"]({
            difficulty,
            text,
            thematic,
        }),
    Match: async ({ columns, difficulty, thematic }) =>
        new TYPE_MAP["Match"]({
            columns,
            difficulty,
            thematic,
        }),
    PicsToWord: async ({ difficulty, pictures, thematic, word }) => {
        let flag = [];

        try {
            const picturePaths = await Promise.all(
                pictures.map(async (picture) => {
                    const { public_id, secure_url } =
                        await cloudinary.uploader.upload(picture.tempFilePath, {
                            folder: "exercise_images",
                        });
                    flag.push(public_id);

                    await fsPromise.unlink(picture.tempFilePath);

                    return { public_id, secure_url };
                }),
            );

            return new TYPE_MAP["PicsToWord"]({
                difficulty,
                pictures: picturePaths,
                thematic,
                word,
            });
        } catch (error) {
            console.error("uploading images - PicsToWord", error);

            if (flag.length > 0) {
                try {
                    flag.forEach(async (flag) => {
                        await cloudinary.uploader.destroy(flag);
                    });
                } catch (error) {
                    console.error("deleting new image", error, flag);
                    throw new Error("pictures' cleanup failed");
                }
            }

            throw new Error("pictures upload failed");
        }

        return new TYPE_MAP["PicsToWord"]({
            difficulty,
            pictures: picturePaths,
            thematic,
            word,
        });
    },
    WordScramble: async ({ difficulty, thematic, words }) =>
        new TYPE_MAP["WordScramble"]({
            difficulty,
            thematic,
            words: words.map((w) => w.toLowerCase().trim()),
        }),
    WordSearch: async ({ difficulty, thematic, words }) => {
        const matrix = Array.from({ length: 10 }, () =>
            Array.from({ length: 10 }, () => ""),
        );

        const checkDirectionValidity = (posX, posY, dX, dY, wordIndex) => {
            const word = words[wordIndex].replace(/-/g, "");
            const distance = word.length - 1;

            const endX = posX + distance * dX;
            const endY = posY + distance * dY;

            if (endX < 0 || 10 <= endX || endY < 0 || 10 <= endY) return false;

            for (let i = 0; i <= distance; i++) {
                const posChar = matrix[posX + dX * i][posY + dY * i];
                if (posChar === "") continue;
                else if (posChar[0] !== word[i]) return false;
            }
            return true;
        };

        words.sort((a, b) => b.length - a.length);

        const wordPlacement = async (idx) => {
            if (words.length === idx) return [];

            const word = words[idx].replace(/-/g, "");

            const distance = word.length - 1;

            let mark = Array.from({ length: 100 }, (_, i) => i);
            do {
                const index = Math.floor(Math.random() * mark.length);

                const posX = Math.floor(mark[index] / 10);
                const posY = mark[index] % 10;

                //remember that no one word starts in a taken position with this condition
                if (
                    ([9 - posX, posX].sort().splice(1, 1)[0] < distance &&
                        [9 - posY, posY].sort().splice(1, 1)[0] < distance) ||
                    matrix[posX][posY] !== ""
                ) {
                    mark.splice(index, 1);
                    continue;
                }

                let dx = [];
                let dy = [];

                switch (difficulty) {
                    case "easy":
                        dx = [0, 1]; // →↓
                        dy = [1, 0]; // →↓

                        break;

                    case "medium":
                        dx = [-1, 0, 1, 1]; // ↗→↘↓
                        dy = [1, 1, 1, 0]; // ↗→↘↓
                        break;

                    case "hard":
                        dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // ↑↗→↘↓↙←↖
                        dy = [0, 1, 1, 1, 0, -1, -1, -1]; // ↑↗→↘↓↙←↖
                }

                do {
                    const dIndex = Math.floor(Math.random() * dx.length);
                    const dX = dx.splice(dIndex, 1)[0];
                    const dY = dy.splice(dIndex, 1)[0];

                    if (!checkDirectionValidity(posX, posY, dX, dY, idx))
                        continue;

                    const endX = posX + distance * dX;
                    const endY = posY + distance * dY;

                    const previouslyPlaced = [];

                    for (let i = 0; i <= distance; i++) {
                        if (matrix[posX + dX * i][posY + dY * i] !== "") {
                            previouslyPlaced.push(i);
                            continue;
                        }
                        matrix[posX + dX * i][posY + dY * i] = word[i];
                    }

                    const edgeArray = await wordPlacement(idx + 1);

                    if (edgeArray === false) {
                        for (let i = 0; i <= distance; i++) {
                            if (previouslyPlaced.includes(i)) continue;
                            matrix[posX + dX * i][posY + dY * i] = "";
                        }

                        continue;
                    }

                    return [
                        {
                            word: words[idx],
                            start: [posX, posY],
                            end: [endX, endY],
                        },
                        ...edgeArray,
                    ];
                } while (dx.length);
            } while (mark.length);
            return false;
        };

        const edgeArray = await wordPlacement(0);

        if (edgeArray === false) return false;

        edgeArray.sort((a, b) => a.word.localeCompare(b.word));

        return new WordSearch({
            difficulty,
            letterPool: matrix,
            thematic,
            words: edgeArray,
        });
    },
};

const CHECK_FUNCTIONS = {
    FillBlank: async ({
        body: {
            user: { id: userID },
            words,
        },
        params: { id },
    }) => {
        const user = await User.findById(userID).select("solution_progress");
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await FillBlank.findById(id).select("words _id");

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (
            !user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].progress,
            ).length === 0
        )
            throw new Error("default missing");

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].completed
        )
            return {
                already_solved: true,
                exerciseCompleted: true,
            };

        const { correct, placed } = exercise.checkAnswer(words.map((w) => w));

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].completed = correct;

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].progress.placed = placed.map((s, i) => ({
            word: words[i],
            solved: s,
        }));

        user.markModified("solution_progress");
        await user.save();

        return {
            solved: user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress.placed,
            exerciseCompleted:
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].completed,
        };
    },
    Match: async ({
        body: {
            user: { id: userID },
            matches,
        },
        params: { id },
    }) => {
        const user = await User.findById(userID).select("solution_progress");
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await Match.findById(id).select("columns _id");

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (
            !user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].progress,
            ).length === 0
        )
            throw new Error("default missing");

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].completed
        )
            return {
                already_solved: true,
                exerciseCompleted: true,
            };

        const { correct, matches: newMatches } = exercise.checkAnswer(matches);

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].completed = correct;

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].progress.matches = newMatches;

        user.markModified("solution_progress");
        await user.save();

        return {
            solved: user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress.matches,
            exerciseCompleted:
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].completed,
        };
    },
    PicsToWord: async ({
        body: {
            user: { id: userID },
            word,
        },
        params: { id },
    }) => {
        const user = await User.findById(userID).select("solution_progress");
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await PicsToWord.findById(id).select("word _id");

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (
            !user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].progress,
            ).length === 0
        )
            throw new Error("default missing");

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].completed
        )
            return {
                already_solved: true,
                exerciseCompleted: true,
            };

        const correct = exercise.checkAnswer(word);

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].completed = correct;

        if (correct) {
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress = { placed: word.split(""), unplaced: [] };
        }

        user.markModified("solution_progress");
        await user.save();

        if (!correct) throw new Error("wrong answer");

        return {
            solved: correct,
            exerciseCompleted:
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].completed,
        };
    },
    WordScramble: async ({
        body: {
            index,
            user: { id: userID },
            word,
        },
        params: { id },
    }) => {
        const user = await User.findById(userID).select("solution_progress");
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await WordScramble.findById(id).select("words _id");

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (
            !user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].progress,
            ).length === 0
        )
            throw new Error("default missing");

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress[index]?.solved
        )
            return {
                already_solved: true,
                exerciseCompleted:
                    user.solution_progress[unit.number - 1].exercises[
                        exerciseProgressIndex
                    ].completed,
            };

        const correct = exercise.checkAnswer(index, word);

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].progress[index] = {
            unplaced: [],
            placed: word.split(""),
            solved: correct ? true : false,
        };

        if (
            correct &&
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress.every((p) => p.solved)
        )
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].completed = true;

        user.markModified("solution_progress");
        await user.save();

        if (!correct) throw new Error("wrong answer");

        return {
            solved: correct,
            exerciseCompleted:
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].completed,
        };
    },
    WordSearch: async ({
        body: {
            start,
            end,
            user: { id: userID },
        },
        params: { id },
    }) => {
        const user = await User.findById(userID).select("solution_progress");
        const unit = await Unit.findOne({ "exercises.item": id });
        const exercise = await WordSearch.findById(id).select("words _id");

        const exerciseProgressIndex = user.solution_progress[
            unit.number - 1
        ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

        if (
            !user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress ||
            Object.keys(
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].progress,
            ).length === 0
        )
            throw new Error("default missing");

        const { index, word } = exercise.checkAnswer(start, end);

        if (!word) throw new Error("wrong answer");

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress.words[index].solved
        )
            return {
                already_solved: true,
                exerciseCompleted:
                    user.solution_progress[unit.number - 1].exercises[
                        exerciseProgressIndex
                    ].completed,
            };

        user.solution_progress[unit.number - 1].exercises[
            exerciseProgressIndex
        ].progress.words[index] = { word, start, end, solved: true };

        if (
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].progress.words.every((p) => p.solved)
        )
            user.solution_progress[unit.number - 1].exercises[
                exerciseProgressIndex
            ].completed = true;

        user.markModified("solution_progress");
        await user.save();

        return {
            solved: true,
            exerciseCompleted:
                user.solution_progress[unit.number - 1].exercises[
                    exerciseProgressIndex
                ].completed,
        };
    },
};
