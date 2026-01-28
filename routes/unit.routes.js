import express from "express";
// import { check, checkSchema } from 'express-validator';

import {
    validateAdmin,
    validateJWT,
} from "../middlewares/validators.middleware.js";

import {
    validateUnitData,
    validateUnitId,
} from "../middlewares/unit.middleware.js";

import {} from "../helpers/dbValidators.js";

import {
    createUnit,
    deleteUnit,
    getAllUnits,
    getUnit,
    updateUnit,
} from "../controllers/unit.controller.js";

const router = express.Router();

router.delete("/:id", [validateJWT, validateAdmin, validateUnitId], deleteUnit);
router.get("", [validateJWT], getAllUnits);
router.get("/:id", [validateJWT, validateUnitId], getUnit);
router.post("", [validateJWT, validateAdmin, validateUnitData], createUnit);
router.put(
    "/:id",
    [validateJWT, validateAdmin, validateUnitId, validateUnitData],
    updateUnit
);

export default router;
