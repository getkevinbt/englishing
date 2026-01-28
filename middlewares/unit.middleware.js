import mongoose from "mongoose";

import { Unit } from "../models/index.js";

const ALLOWED_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/tiff",
    "image/webp",
];

export const validateUnitData = async (req, res, next) => {
    const { number, title, description } = req.body;
    const { id } = req.params;
    const background_image = req.files?.background_image;

    try {
        let unit;
        if (id) unit = await Unit.findById(id);
        const maxUnitNumber =
            (await Unit.findOne({}).sort({ number: -1 }).select({ number: 1 }))
                ?.number || 0;
        if (number !== undefined || number !== null) {
            if (isNaN(Number(number)) || Number(number) <= 0)
                return res.status(400).json({
                    msg: "number can't be less than or equal to 0 and must be a number",
                });
            else if (
                Number(number) <= maxUnitNumber &&
                (!unit || Number(number) !== unit.number)
            )
                req.body.reordering = true;
            else req.body.number = maxUnitNumber + 1;
        } else if (unit) req.body.number = unit.number;
        else req.body.number = maxUnitNumber + 1;

        if (!title || typeof title !== "string")
            return res
                .status(400)
                .json({ msg: "title is required and must be a string" });
        else if (description && typeof description !== "string")
            return res
                .status(400)
                .json({ msg: "description must be a string" });
        else if (background_image) {
            if (Object.keys(background_image).includes("0"))
                return res
                    .status(400)
                    .json({ msg: "only one file is allowed" });
            else if (
                !ALLOWED_MIME_TYPES.includes(
                    background_image.mimetype?.toLowerCase()
                )
            )
                return res.status(400).json({
                    msg: "image invalid file format",
                    allowed_formats: ALLOWED_MIME_TYPES,
                });
        }
        next();
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ msg: "internal server error - validating unit data" });
    }
};

export const validateUnitId = async (req, res, next) => {
    const { id, pos } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ msg: "invalid unit id" });

    try {
        const unit = await Unit.findById(id);
        if (!unit)
            return res
                .status(404)
                .json({ msg: `unit with id ${id} not found` });
        if (
            pos &&
            pos !== "e" &&
            (isNaN(Number(pos)) ||
                Number(pos) < 1 ||
                unit.exercises.length < Number(pos))
        )
            return res.status(400).json({
                msg: `pos parameter must be a valid index of unit exercises or 'e'`,
            });
        next();
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ msg: "internal server error - validating unit id" });
    }
};
