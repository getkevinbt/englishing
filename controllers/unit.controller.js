import fsPromise from "fs/promises";

import { cloudinary } from "../helpers/cloudinary.js";
import { Unit, User } from "../models/index.js";

import TYPE_MAP from "../helpers/exerciseTypeMap.js";

import { generateJWT } from "../helpers/generateJWT.js";

export const createUnit = async (req, res) => {
    const {
        description,
        newToken,
        number,
        reordering,
        title,
        user: { id: userID },
    } = req.body;
    const { background_image } = req.files || {};

    const data = {
        description,
        title,
        number,
        history: [{ action: "create", user: await User.findById(userID) }],
    };

    if (background_image && background_image.tempFilePath) {
        let flag;

        try {
            const { public_id, secure_url } = await cloudinary.uploader.upload(
                background_image.tempFilePath,
                {
                    folder: "unit_images",
                },
            );

            flag = public_id;

            await fsPromise.unlink(background_image.tempFilePath);

            data.backgroundImage = { public_id, secure_url };
        } catch (error) {
            console.error("uploading new image", error);

            if (flag) {
                try {
                    await cloudinary.uploader.destroy(flag);
                } catch (error) {
                    console.error("deleting new image", error, flag);
                    return res.status(500).json({
                        msg: "internal server error - creating unit",
                    });
                }
            }

            return res.status(500).json({
                msg: "internal server error - creating unit",
            });
        }
    }

    try {
        const unit = new Unit(data);

        if (reordering) {
            const unitsToUpdate = await Unit.find({
                number: { $gte: number },
            }).sort({ number: 1 });

            for (let i = unitsToUpdate.length - 1; i >= 0; i--) {
                unitsToUpdate[i].number++;
                await unitsToUpdate[i].save();
            }
        }

        await unit.save();

        const response = { unit };

        if (newToken) {
            const { token, expiresAt } = await generateJWT(
                (await User.findById(userID)).toJSON(),
            );
            response.token = token;
            response.expiresAt = expiresAt;
            response.msg = "token renewed";
        }

        return res.json(response);
    } catch (error) {
        console.error("", error);

        return res
            .status(500)
            .json({ msg: "internal server error - creating unit" });
    }
};

export const getAllUnits = async (req, res) => {
    const {
        user: { id: userID },
        newToken,
    } = req.body;

    try {
        const units = await Unit.find({}).sort({ number: 1 });

        const user = await User.findById(userID);

        if (!user.solution_progress) user.solution_progress = [];

        units.forEach((u, i) => {
            !user.solution_progress[i]
                ? user.solution_progress.push({
                      unit: u._id,
                      exercises: [],
                  })
                : user.solution_progress[i].unit.equals(u._id)
                  ? null
                  : user.solution_progress.splice(i, 0, {
                        unit: u._id,
                        exercises: [],
                    });
        });

        user.save();

        const response = {
            units: units.map(({ _doc: { exercises, ..._doc }, history }) => ({
                ..._doc,
                exerciseCount: exercises.length,
                history: history.map((h) => ({
                    action: h.action,
                    user: h.user.publicID,
                    createdAt: h.createdAt,
                })),
            })),
        };

        response.units.forEach((unit) => {
            delete unit.__v;
            unit.id = unit._id;
            delete unit._id;
        });

        if (newToken) {
            const { token, expiresAt } = await generateJWT(user);
            response.token = token;
            response.expiresAt = expiresAt;
            response.msg = "token renewed";
        }

        return res.json(response);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ msg: "internal server error - getting units" });
    }
};

export const getUnit = async (req, res) => {
    const { id } = req.params;
    const {
        user: { id: userID },
        newToken,
    } = req.body;

    try {
        const user = await User.findById(userID);
        const unit = await Unit.findById(id);

        const index = user.solution_progress.findIndex((up) =>
            unit._id.equals(up.unit),
        );

        if (index === -1) throw new Error("unit not found in user progress");

        unit.exercises.forEach((exercise, i) => {
            !user.solution_progress[index].exercises[i]
                ? user.solution_progress[index].exercises.push({
                      exercise: exercise.item,
                      completed: false,
                  })
                : user.solution_progress[index].exercises[i].exercise.equals(
                        exercise.item,
                    )
                  ? null
                  : user.solution_progress[index].exercises.splice(i, 0, {
                        exercise: exercise.item,
                        completed: false,
                    });
        });

        await user.save();

        if (user.role === "admin") {
            return res.json({ unit: unit.toJSONWithHistory() });
        }

        const response = { unit };

        if (newToken) {
            const { token, expiresAt } = await generateJWT(user);
            response.token = token;
            response.expiresAt = expiresAt;
            response.msg = "token renewed";
        }

        return res.json(response);
    } catch (error) {
        console.error("getUnit error =>", error);

        return res.status(500).json({
            msg: "internal server error - getting unit",
        });
    }
};

export const updateUnit = async (req, res) => {
    const { id } = req.params;
    const {
        description,
        newToken,
        number,
        reordering,
        title,
        user: { id: userID },
    } = req.body;
    const { background_image } = req.files || {};

    try {
        const user = await User.findById(userID);
        const unit = await Unit.findById(id);

        const unitPreviousNumber = unit.number;

        if (reordering) unit.number = -1;
        unit.title = title;
        unit.description = description;
        unit.history.push({
            action: "update",
            user: user._id,
        });

        if (background_image && background_image.tempFilePath) {
            if (unit.backgroundImage && unit.backgroundImage.public_id) {
                try {
                    await cloudinary.uploader.destroy(
                        unit.backgroundImage.public_id,
                    );
                } catch (error) {
                    console.error("deleting old image", error);
                    return res.status(500).json({
                        msg: "internal server error - updating unit",
                    });
                }
            }

            let flag;
            try {
                const { public_id, secure_url } =
                    await cloudinary.uploader.upload(
                        background_image.tempFilePath,
                        {
                            folder: "unit_images",
                        },
                    );

                flag = public_id;

                await fsPromise.unlink(background_image.tempFilePath);

                unit.backgroundImage = { public_id, secure_url };
            } catch (error) {
                console.error("uploading new image", error);

                if (flag) {
                    try {
                        cloudinary.uploader.destroy(flag);
                    } catch (error) {
                        console.error("deleting new image", error);
                        return res.status(500).json({
                            msg: "internal server error - updating unit",
                        });
                    }
                }

                return res.status(500).json({
                    msg: "internal server error - updating unit",
                });
            }
        }

        await unit.save();

        if (reordering) {
            const flag = number <= unitPreviousNumber;

            let unitsToUpdate;

            if (flag) {
                // move to a previous position
                unitsToUpdate = await Unit.find({
                    _id: { $ne: unit._id },
                    number: { $gte: number, $lt: unitPreviousNumber },
                }).sort({ number: 1 });
            } else {
                // move to a later position
                unitsToUpdate = await Unit.find({
                    _id: { $ne: unit._id },
                    number: { $gt: unitPreviousNumber, $lte: number },
                }).sort({ number: 1 });
            }

            for (let i = unitsToUpdate.length - 1; i >= 0; i--) {
                const unitToSave = flag
                    ? unitsToUpdate[i]
                    : unitsToUpdate[unitsToUpdate.length - i - 1];

                flag ? unitToSave.number++ : unitToSave.number--;

                unitToSave.history.push({
                    action: "update",
                    user: user._id,
                });

                await unitToSave.save();
            }

            unit.number = number;
            await unit.save();

            const usersToUpdate = await User.find({
                "solution_progress.unit": unit._id,
            })
                .select("solution_progress")
                .populate({ path: "solution_progress.unit", select: "number" });

            for (let i = 0; i < usersToUpdate.length; i++) {
                usersToUpdate[i].solution_progress.sort(
                    (a, b) => a.unit.number - b.unit.number,
                );
                await usersToUpdate[i].save();
            }
        }

        const response = { unit };

        if (newToken) {
            const { token, expiresAt } = await generateJWT(user);
            response.token = token;
            response.expiresAt = expiresAt;
            response.msg = "token renewed";
        }

        return res.json(response);
    } catch (error) {
        console.error("updateUnit =>", error);

        return res
            .status(500)
            .json({ msg: "internal server error - updating unit" });
    }
};

export const deleteUnit = async (req, res) => {
    const { id } = req.params;
    const {
        user: { id: userID },
        newToken,
    } = req.body;
    try {
        const user = await User.findById(userID);
        const unit = await Unit.findById(id);

        if (unit.backgroundImage && unit.backgroundImage.public_id) {
            try {
                await cloudinary.uploader.destroy(
                    unit.backgroundImage.public_id,
                );
            } catch (error) {
                console.error("deleting unit image", error);
                return res.status(500).json({
                    msg: "internal server error - deleting unit",
                });
            }
        }
        const { _id: unitID, number: unitNumber } = unit;

        const exercisesToDelete = unit.exercises;

        for (let i = 0; i < exercisesToDelete.length; i++)
            await TYPE_MAP[exercisesToDelete[i].kind].findByIdAndDelete(
                exercisesToDelete[i].item,
            );

        await unit.deleteOne();

        console.log(unit);

        const unitsToUpdate = await Unit.find({
            number: { $gt: unitNumber },
        }).sort({ number: 1 });
        for (let i = 0; i < unitsToUpdate.length; i++) {
            unitsToUpdate[i].number--;
            unitsToUpdate[i].history.push({
                action: "update",
                user: user._id,
            });
            await unitsToUpdate[i].save();
        }

        const usersToUpdate = await User.find({
            "solution_progress.unit": unit._id,
        })
            .select("solution_progress")
            .populate({ path: "solution_progress.unit", select: "number" });

        for (let i = 0; i < usersToUpdate.length; i++) {
            usersToUpdate[i].solution_progress = usersToUpdate[
                i
            ].solution_progress.filter((up) => !unitID.equals(up.unit._id));
            usersToUpdate[i].solution_progress.sort((a, b) => {
                return a.unit.number - b.unit.number;
            });
            await usersToUpdate[i].save();
        }
        const response = { unit };
        if (newToken) {
            const { token, expiresAt } = await generateJWT(user);
            response.token = token;
            response.expiresAt = expiresAt;
            response.msg = "token renewed";
        }
        return res.json(response);
    } catch (error) {
        console.error("deleteUnit =>", error);
        return res
            .status(500)
            .json({ msg: "internal server error - deleting unit" });
    }
};
