import express from "express";

import {
    validateJWT,
    validateAdmin,
} from "../middlewares/validators.middleware.js";
import { validateUnitId } from "../middlewares/unit.middleware.js";
import {
    validateAnswer,
    validateData,
    validateTypeId,
} from "../middlewares/exercise.middleware.js";

import {} from "../helpers/dbValidators.js";

import {
    checkAnswer,
    create,
    deleteById,
    getById,
} from "../controllers/exercise.controller.js";

const router = express.Router();

router.post(
    "/create/unit_:id/at_:pos",
    [validateJWT, validateAdmin, validateUnitId, validateData],
    create
);
router.delete(
    "/delete/:type/:id",
    [validateJWT, validateAdmin, validateTypeId],
    deleteById
);
router.get("/:type/:id", [validateJWT, validateTypeId], getById);
router.post(
    "/check_answer/:type/:id",
    [validateJWT, validateTypeId, validateAnswer],
    checkAnswer
);

export default router;
