import mongoose from "mongoose";

import { Unit, User } from "../models/index.js";

import TYPE_MAP from "../helpers/exerciseTypeMap.js";

const ALLOWED_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/webp",
];

export const validateAnswer = async (req, res, next) => {
    const { type } = req.params;

    if (!Object.keys(VALIDATION_ANSWER_FUNCTIONS).includes(type))
        return res.status(400).json({
            msg: `unsupported exercise type: ${type}`,
            supported_types: Object.keys(VALIDATION_ANSWER_FUNCTIONS),
        });
    else if (!(await VALIDATION_ANSWER_FUNCTIONS[type](req, res))) return;
    next();
};
export const validateData = async (req, res, next) => {
    const { type } = req.body;
    if (!type || typeof type !== "string")
        return res
            .status(400)
            .json({ msg: "type is required and must be a string" });

    if (type === "PicsToWord")
        req.body.data = { pictures: req.files?.pictures, ...req.body };

    const { data } = req.body;

    if (!data || typeof data !== "object")
        return res
            .status(400)
            .json({ msg: "data is required and must be an object" });
    else if (!Object.keys(VALIDATION_FUNCTIONS).includes(type))
        return res.status(400).json({
            msg: `unsupported exercise type: ${type}`,
            supportedTypes: Object.keys(VALIDATION_FUNCTIONS),
        });
    else if (!(await VALIDATION_FUNCTIONS[type](req, res))) return;

    next();
};
export const validateTypeId = async (req, res, next) => {
    const { type, id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ msg: "invalid exercise id" });
    else if (!Object.keys(TYPE_MAP).includes(type))
        return res.status(400).json({
            msg: `unsupported exercise type: ${type}`,
            supported_types: Object.keys(TYPE_MAP),
        });
    try {
        const exercise = await TYPE_MAP[type].findById(id);
        if (!exercise)
            return res
                .status(404)
                .json({ msg: `exercise type ${type} with id ${id} not found` });
        next();
    } catch (error) {
        console.error("validating exercise type and id", error);
        return res.status(500).json({ msg: "internal server error" });
    }
};

const VALIDATION_FUNCTIONS = {
    FillBlank: async (req, res) => {
        const { ignoreRepetitions = false } = req.query;
        const {
            data: { difficulty, text, thematic },
        } = req.body;

        const candidates = text.match(/\\\{[^}]*\}?/g) || [];
        const placeholders = candidates.map((ph) =>
            ph.slice(2, -1).toLowerCase().trim(),
        );

        if (!difficulty || !["easy", "medium", "hard"].includes(difficulty)) {
            res.status(400).json({
                msg: "difficulty is required and must be one of 'easy', 'medium', or 'hard'",
            });
            return false;
        } else if (
            !text ||
            typeof text !== "string" ||
            text.length < 1 ||
            500 < text.length
        ) {
            res.status(400).json({
                msg: "text is required and must be a string of 1-500 characters long",
            });
            return false;
        } else if (
            placeholders.length === 0 ||
            10 < placeholders.length ||
            placeholders.some((ph) => ph.length === 0 || 20 < ph.length) ||
            !placeholders.every((ph) => /^[a-zA-Z][a-z]*(?:-[a-z]+)*$/.test(ph))
        ) {
            res.status(400).json({
                msg: "text must contain between 1 and 10 placeholders, and each placeholder must be between 1 and 20 characters long and follow the format: first letter uppercase or lowercase, rest lowercase or hyphens",
            });
            return false;
        } else if (
            !thematic ||
            typeof thematic !== "string" ||
            thematic.length < 1 ||
            20 < thematic.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(thematic)
        ) {
            res.status(400).json({
                msg: "thematic is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (ignoreRepetitions) return true;
        else {
            try {
                const repetitions = (
                    await Promise.all(
                        placeholders.map(async (placeholder) => ({
                            word: placeholder,
                            count: await TYPE_MAP["FillBlank"].countDocuments({
                                words: placeholder,
                            }),
                        })),
                    )
                )
                    .filter((item) => item.count > 0)
                    .map((item) => item.word);
                if (0 < repetitions.length) {
                    res.status(400).json({
                        msg: "some words already exist in other exercises, to ignore this validation, set the 'ignoreRepetitions' query parameter to true",
                        repetitions,
                    });
                    return false;
                }
            } catch (error) {
                console.error("validating repetitions - FillBlank", error);
                res.status(500).json({
                    msg: "internal server error - validating exercise data",
                });
                return false;
            }
        }
        return true;
    },
    Match: async (req, res) => {
        const {
            data: { columns, difficulty, thematic },
        } = req.body;

        if (!columns || !Array.isArray(columns) || columns.length !== 2) {
            res.status(400).json({
                msg: "columns is required and must be a 2D array with 2 columns",
            });
            return false;
        } else if (columns[0].length !== columns[1].length) {
            res.status(400).json({
                msg: "columns must be a 2D array with 2 columns of equal length",
            });
            return false;
        } else if (
            !columns.every(
                (col) =>
                    Array.isArray(col) &&
                    col.length <= 6 &&
                    col.every(
                        (str) =>
                            typeof str === "string" &&
                            0 < str.length &&
                            str.length <= 20 &&
                            /^[A-Za-z0-9 .,!?'"()-]+$/.test(str),
                    ),
            )
        ) {
            res.status(400).json({
                msg: "each column must contain up to 6 strings of max 15 characters with letters, numbers and basic english punctuation only",
            });
            return false;
        } else if (
            !thematic ||
            typeof thematic !== "string" ||
            thematic.length < 1 ||
            20 < thematic.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(thematic)
        ) {
            res.status(400).json({
                msg: "thematic is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (
            !difficulty ||
            typeof difficulty !== "string" ||
            (difficulty !== "easy" &&
                difficulty !== "medium" &&
                difficulty !== "hard")
        ) {
            res.status(400).json({
                msg: "difficulty is a required string variable and should be equal to 'easy', 'medium' or 'hard'",
            });
            return false;
        }
        return true;
    },
    PicsToWord: async (req, res) => {
        const {
            data: { difficulty, thematic, word },
        } = req.body;
        const pictures = req.files?.pictures;

        if (
            !difficulty ||
            typeof difficulty !== "string" ||
            (difficulty !== "easy" &&
                difficulty !== "medium" &&
                difficulty !== "hard")
        ) {
            res.status(400).json({
                msg: "difficulty is a required string variable and should be equal to 'easy', 'medium' or 'hard'",
            });
            return false;
        } else if (
            !thematic ||
            typeof thematic !== "string" ||
            thematic.length < 1 ||
            20 < thematic.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(thematic)
        ) {
            res.status(400).json({
                msg: "thematic is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (
            !word ||
            typeof word !== "string" ||
            word.length < 1 ||
            20 < word.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(word)
        ) {
            res.status(400).json({
                msg: "word is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (
            !pictures ||
            !Array.isArray(pictures) ||
            pictures.length !== 4
        ) {
            res.status(400).json({
                msg: "pictures must be an array of 4 picture files",
            });
            return false;
        } else if (
            !pictures.every((p) =>
                ALLOWED_MIME_TYPES.includes(p.mimetype?.toLowerCase()),
            )
        ) {
            res.status(400).json({
                msg: "each picture must have an allowed format",
                allowed_formats: ALLOWED_MIME_TYPES,
            });
            return false;
        }
        req.body.data = { difficulty, thematic, word, pictures };
        return true;
    },
    WordScramble: async (req, res) => {
        const { ignoreRepetitions = false } = req.query;
        const {
            type,
            data: { difficulty, thematic, words },
        } = req.body;

        if (
            !difficulty ||
            typeof difficulty !== "string" ||
            (difficulty !== "easy" &&
                difficulty !== "medium" &&
                difficulty !== "hard")
        ) {
            res.status(400).json({
                msg: "difficulty is a required string variable and should be equal to 'easy', 'medium' or 'hard'",
            });
            return false;
        } else if (!words || !Array.isArray(words)) {
            res.status(400).json({
                msg: "words is required and must be an array",
            });
            return false;
        } else if (
            !thematic ||
            typeof thematic !== "string" ||
            thematic.length < 1 ||
            20 < thematic.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(thematic)
        ) {
            res.status(400).json({
                msg: "thematic is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (
            words.length < 1 ||
            4 < words.length ||
            !words
                .map((word) => word.toLowerCase().trim())
                .every(
                    (word) =>
                        typeof word === "string" &&
                        0 < word.length &&
                        word.length < 21 &&
                        /^[a-z]+(?:-[a-z]+)*$/.test(word),
                )
        ) {
            res.status(400).json({
                msg: `invalid data for exercise type word-scramble: words must contain between 1 and 4 words, and each word must be a string of 1-10 letters (a-z and -) only`,
            });
            return false;
        } else if (ignoreRepetitions) return true;
        else {
            try {
                const repetitions = (
                    await Promise.all(
                        words
                            .map((word) => word.toLowerCase().trim())
                            .map(async (word) => ({
                                word,
                                count: await TYPE_MAP[type].countDocuments({
                                    "words.word": word,
                                }),
                            })),
                    )
                )
                    .filter((item) => item.count > 0)
                    .map((item) => item.word);
                if (repetitions.length > 0) {
                    res.status(400).json({
                        msg: "some words already exist in other exercises, to ignore this validation, set the 'ignoreRepetitions' query parameter to true",
                        repetitions,
                    });
                    return false;
                }
            } catch (error) {
                console.error("validating repetitions - WordScramble", error);
                res.status(500).json({
                    msg: "internal server error - validating exercise data",
                });
                return false;
            }
        }
        return true;
    },
    WordSearch: async (req, res) => {
        const { ignoreRepetitions = false } = req.query;
        const {
            type,
            data: { difficulty, thematic, words },
        } = req.body;

        if (
            !difficulty ||
            typeof difficulty !== "string" ||
            (difficulty !== "easy" &&
                difficulty !== "medium" &&
                difficulty !== "hard")
        ) {
            res.status(400).json({
                msg: "difficulty is a required string variable and should be equal to 'easy', 'medium' or 'hard'",
            });
            return false;
        } else if (!words || !Array.isArray(words)) {
            res.status(400).json({
                msg: "words is required and must be an array",
            });
            return false;
        } else if (
            !thematic ||
            typeof thematic !== "string" ||
            thematic.length < 1 ||
            20 < thematic.length ||
            !/^[a-z]+(?:-[a-z]+)*$/.test(thematic)
        ) {
            res.status(400).json({
                msg: "thematic is required and must be a string of 1-20 letters (a-z and -) only",
            });
            return false;
        } else if (
            words.length < 1 ||
            10 < words.length ||
            !words
                .map((word) => word.toLowerCase().trim())
                .every(
                    (word) =>
                        typeof word === "string" &&
                        0 < word.length &&
                        word.length < 11 &&
                        /^[a-z]+(?:-[a-z]+)*$/.test(word),
                )
        ) {
            res.status(400).json({
                msg: `invalid data for exercise type word-search: words must contain between 1 and 10 words, and each word must be a string of 1-10 letters (a-z and -) only`,
            });
            return false;
        } else if (ignoreRepetitions) return true;
        else {
            try {
                const repetitions = (
                    await Promise.all(
                        words
                            .map((word) => word.toLowerCase().trim())
                            .map(async (word) => ({
                                word,
                                count: await TYPE_MAP[type].countDocuments({
                                    "words.word": word,
                                }),
                            })),
                    )
                )
                    .filter((item) => item.count > 0)
                    .map((item) => item.word);
                if (repetitions.length > 0) {
                    res.status(400).json({
                        msg: "some words already exist in other exercises, to ignore this validation, set the 'ignoreRepetitions' query parameter to true",
                        repetitions,
                    });
                    return false;
                }
            } catch (error) {
                console.error("validating repetitions - WordSearch", error);
                res.status(500).json({
                    msg: "internal server error - validating exercise data",
                });
                return false;
            }
        }
        return true;
    },
};

const VALIDATION_ANSWER_FUNCTIONS = {
    FillBlank: async (req, res) => {
        const {
            user: { id: userID },
        } = req.body;
        const { type, id } = req.params;

        let exercise;

        try {
            const user =
                await User.findById(userID).select("solution_progress");

            const unit = await Unit.findOne({ "exercises.item": id }).select(
                "_id",
            );
            if (!unit) throw new Error("unit not found");
            const unitIndex = user.solution_progress.findIndex((u) =>
                u.unit.equals(unit._id),
            );
            if (unitIndex === -1)
                throw new Error("unit not found in user's solution progress");
            exercise = await TYPE_MAP[type].findById(id);

            const exerciseIndex = user.solution_progress[
                unitIndex
            ].exercises.findIndex((e) => e.exercise.equals(exercise._id));
            if (exerciseIndex === -1)
                throw new Error(
                    "exercise not found in user's solution progress",
                );
        } catch (error) {
            console.error("validating FillBlank data", error);
            res.status(500).json({ msg: "internal server error" });
            return false;
        }

        if (!req.body.words || !Array.isArray(req.body.words)) {
            res.status(400).json({
                msg: "words is required and must be an array",
            });
            return false;
        } else if (req.body.words.length !== exercise.words.length) {
            res.status(400).json({
                msg: `words must contain exactly ${exercise.words.length} items`,
            });
            return false;
        } else if (
            !req.body.words.every(
                (word) => typeof word === "string" && word.trim().length > 0,
            )
        ) {
            res.status(400).json({
                msg: "each word must be a non-empty string",
            });
            return false;
        }

        const arrWords = exercise.words.map((w) => w.toLowerCase().trim());

        if (
            !req.body.words.every((w) => {
                const index = arrWords.findIndex(
                    (cw) => cw === w.toLowerCase().trim(),
                );
                if (index !== -1) {
                    arrWords.splice(index, 1);
                    return true;
                }
                return false;
            })
        ) {
            res.status(400).json({
                msg: "one or more words are incorrect",
                incorrect_words: arrWords,
            });
            return false;
        }
        return true;
    },
    Match: async (req, res) => {
        const {
            user: { id: userID },
        } = req.body;
        const { type, id } = req.params;

        let exercise;

        try {
            const user =
                await User.findById(userID).select("solution_progress");

            const unit = await Unit.findOne({ "exercises.item": id }).select(
                "_id",
            );

            if (!unit) throw new Error("unit not found");

            const unitIndex = user.solution_progress.findIndex((u) =>
                u.unit.equals(unit._id),
            );

            if (unitIndex === -1)
                throw new Error("unit not found in user's solution progress");

            exercise = await TYPE_MAP[type].findById(id);

            const exerciseIndex = user.solution_progress[
                unitIndex
            ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

            if (exerciseIndex === -1)
                throw new Error(
                    "exercise not found in user's solution progress",
                );
        } catch (error) {
            console.error("validating Match data", error);

            res.status(500).json({ msg: "internal server error" });

            return false;
        }

        if (!req.body.matches || typeof req.body.matches !== "object") {
            res.status(400).json({
                msg: "matches is required and must be an object",
            });
            return false;
        } else if (
            Object.keys(req.body.matches).length !== exercise.columns[0].length
        ) {
            res.status(400).json({
                msg: `matches must contain exactly ${exercise.columns[0].length} items`,
            });
            return false;
        } else if (
            !exercise.columns[0].every((key) =>
                Object.keys(req.body.matches).includes(key),
            )
        ) {
            res.status(400).json({
                msg: "matches' first column are incorrect",
            });
            return false;
        } else if (
            !exercise.columns[0].every((key) =>
                exercise.columns[1].includes(req.body.matches[key]),
            )
        ) {
            res.status(400).json({
                msg: "matches' second column are incorrect",
            });
            return false;
        }
        return true;
    },
    PicsToWord: async (req, res) => {
        const {
            user: { id: userID },
        } = req.body;
        const { type, id } = req.params;

        let exercise;

        try {
            const user =
                await User.findById(userID).select("solution_progress");

            const unit = await Unit.findOne({ "exercises.item": id }).select(
                "_id",
            );
            if (!unit) throw new Error("unit not found");

            const unitIndex = user.solution_progress.findIndex((u) =>
                u.unit.equals(unit._id),
            );
            if (unitIndex === -1)
                throw new Error("unit not found in user's solution progress");

            exercise = await TYPE_MAP[type].findById(id);

            const exerciseIndex = user.solution_progress[
                unitIndex
            ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

            if (exerciseIndex === -1)
                throw new Error(
                    "exercise not found in user's solution progress",
                );
        } catch (error) {
            console.error("validating PicsToWord data", error);

            res.status(500).json({ msg: "internal server error" });

            return false;
        }

        if (!req.body.word || typeof req.body.word !== "string") {
            res.status(400).json({
                msg: "word is required and must be a string",
            });
            return false;
        }

        req.body.word = req.body.word.toLowerCase().trim();

        if (req.body.word.length <= 0 || 20 < req.body.word.length) {
            res.status(400).json({
                msg: "word is required and must be a string of 1-20 letters",
            });
            return false;
        }

        return true;
    },
    WordScramble: async (req, res) => {
        req.body.index = parseInt(req.body.index, 10) - 1;
        const {
            user: { id: userID },
        } = req.body;
        const { type, id } = req.params;

        let exercise;

        try {
            const user =
                await User.findById(userID).select("solution_progress");

            const unit = await Unit.findOne({ "exercises.item": id }).select(
                "_id",
            );
            if (!unit) throw new Error("unit not found");

            const unitIndex = user.solution_progress.findIndex((u) =>
                u.unit.equals(unit._id),
            );
            if (unitIndex === -1)
                throw new Error("unit not found in user's solution progress");

            exercise = await TYPE_MAP[type].findById(id);

            const exerciseIndex = user.solution_progress[
                unitIndex
            ].exercises.findIndex((e) => e.exercise.equals(exercise._id));

            if (exerciseIndex === -1)
                throw new Error(
                    "exercise not found in user's solution progress",
                );
        } catch (error) {
            console.error("validating WordScramble data", error);

            res.status(500).json({ msg: "internal server error" });

            return false;
        }

        if (!req.body.word || typeof req.body.word !== "string") {
            res.status(400).json({
                msg: "word is required and must be a string",
            });
            return false;
        }

        req.body.word = req.body.word.toLowerCase().trim();

        if (req.body.word.length <= 0 || 20 < req.body.word.length) {
            res.status(400).json({
                msg: "word is required and must be a string of 1-20 letters",
            });
            return false;
        } else if (
            !Number.isInteger(Number(req.body.index)) ||
            req.body.index < 0 ||
            exercise.words.length <= req.body.index
        ) {
            res.status(400).json({
                msg: `index is required and must be a number between 1 and ${exercise.words.length}`,
            });
            return false;
        }
        return true;
    },
    WordSearch: async (req, res) => {
        const {
            start,
            end,
            user: { id: userID },
        } = req.body;

        if (!start || !Array.isArray(start) || start.length !== 2) {
            res.status(400).json({
                msg: "start is a required array with two values stored",
            });
            return false;
        } else if (
            !start.every(
                (v) =>
                    typeof v === "number" &&
                    Number.isInteger(v) &&
                    0 <= v &&
                    v <= 9,
            )
        ) {
            res.status(400).json({
                msg: `start values must be integers between 0 and 9, but received [${start}]`,
            });

            return false;
        } else if (!end || !Array.isArray(end) || end.length !== 2) {
            res.status(400).json({
                msg: "end is a required array with two values stored",
            });
            return false;
        } else if (
            !end.every(
                (v) =>
                    typeof v === "number" &&
                    Number.isInteger(v) &&
                    0 <= v &&
                    v <= 9,
            )
        ) {
            res.status(400).json({
                msg: `end values must be integers between 0 and 9, but received [${end}]`,
            });

            return false;
        } else if (
            start[0] !== end[0] &&
            start[1] !== end[1] &&
            Math.abs(start[0] - end[0]) !== Math.abs(start[1] - end[1])
        ) {
            res.status(400).json({
                msg: "the coordinates do not match a horizontal, vertical, or diagonal placement",
            });
            return false;
        }

        return true;
    },
};
