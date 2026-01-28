import express from "express";
import { check, checkSchema } from "express-validator";

import {
    validateField,
    validateJWT,
} from "../middlewares/validators.middleware.js";

// import {} from "../helpers/dbValidators.js";
//import {} from "../helpers/validators.js";

import { userProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", validateJWT, userProfile);

export default router;
