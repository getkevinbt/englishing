import bcryptjs from "bcryptjs";
import emailValidator from "email-validator";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { User } from "../models/index.js";

const PASSWORD_PATTERN =
    /^(?!.*(?:123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz))(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/i;

const checkCorrectPassword = async (req, res, next) => {
    const { user, password } = req.body;

    if (!user)
        return res
            .status(500)
            .json({ msg: "internal server error - validation error" });

    if (
        !password ||
        typeof password !== "string" ||
        !PASSWORD_PATTERN.test(password)
    )
        return res.status(406).json({ msg: "invalid password format" });

    if (!bcryptjs.compareSync(password, user.password.current))
        return res.status(401).json({ msg: "wrong credentials" });

    next();
};

const checkEmailExists = async (req, res, next) => {
    const { email } = req.body;

    if (!emailValidator.validate(email))
        return res.status(406).json({ msg: "invalid email format" });

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(401).json({ msg: "wrong credentials" });

        req.body.user = user;

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "internal server error - contact admin" });
    }
};

const validateAdmin = (req, res, next) => {
    const { user } = req.body;
    if (user.role !== "admin")
        return res.status(403).json({ msg: "insufficient permissions" });
    next();
};

const validateField = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
};

const validateJWT = async (req, res, next) => {
    const token = req.header("jwt");

    if (!token || token === "undefined") {
        return res.status(401).json({
            msg: "token is required",
        });
    }

    try {
        const { id, exp } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        if (id === undefined)
            return res.status(401).json({
                msg: "invalid token",
            });

        const user = await User.findById(id);

        if (!user) return res.status(401).json({ msg: "invalid token" });

        if (!req.body) req.body = {};

        req.body.user = user.toJSON();

        const currentTime = Date.now();

        if (currentTime < exp * 1000 && exp * 1000 <= currentTime + 90000)
            req.body.newToken = true;

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError")
            return res.status(401).json({
                msg: "token expired",
            });

        if (error.name === "JsonWebTokenError")
            return res.status(401).json({
                msg: "invalid token",
            });

        if (error.name === "NotBeforeError")
            return res.status(401).json({
                msg: "token not ready yet",
            });

        //Another unexpected error
        console.error(error);
        return res.status(500).json({
            msg: "internal server error - error processing jwt",
        });
    }
};

// const validateUpdate = async (req, res, next) => {
//     const { email, id, password } = req.body;

//     if (email) {
//         if (!emailRegex.test(email)) {
//             return res.status(400).json({ msg: "invalid email" });
//         } else {
//             const user = await User.findOne({ email });
//             if (user) {
//                 return res.status(400).json({ msg: "email already used" });
//             }

//             req.body.email = {
//                 value: email,
//                 status: true,
//             };
//         }
//     }

//     if (password) {
//         if (
//             !passwordRegex.test(password) ||
//             password.length < 8 ||
//             password.length > 30
//         ) {
//             return res.status(400).json({ msg: "invalid - password" });
//         } else {
//             const user = await User.findById(id);

//             if (
//                 user.password.oldPasswords.some((oldPassword) =>
//                     bcryptjs.compareSync(password, oldPassword)
//                 )
//             ) {
//                 return res
//                     .status(400)
//                     .json({ msg: "password already used before" });
//             }

//             req.body.password = {
//                 value: password,
//                 status: true,
//             };
//         }
//     }

//     next();
// };

export {
    checkCorrectPassword,
    checkEmailExists,
    validateAdmin,
    validateField,
    validateJWT,
    // validateUpdate,
};
