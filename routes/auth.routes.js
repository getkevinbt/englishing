import express from 'express';
import { check, checkSchema } from 'express-validator';

import {
    checkCorrectPassword,
    checkEmailExists,
    validateField,
    validateJWT,
    // validateUpdate,
} from '../middlewares/validators.middleware.js';

import {
    checkCorrectCode,
    checkEmailNotInUse,
    checkIsANewUser,
    checkEmailIsValidated,
} from '../helpers/dbValidators.js';

import { validatePassword } from '../helpers/validators.js';

import {
    deleteUser,
    signUpEmail,
    signUpCode,
    signUpPassword,
    logIn,
    tokenVerification,
    updateUserEmail,
    updateUserPassword,
} from '../controllers/auth.controller.js';

const router = express.Router();

//sign up email
router.post(
    '/sign_up/email',
    [
        checkSchema({
            email: {
                isEmail: {
                    negate: false,
                    errorMessage: 'Invalid email',
                },
                custom: {
                    options: checkEmailNotInUse,
                },
            },
        }),
        validateField,
    ],
    signUpEmail
);

//sign up code
router.post(
    '/sign_up/code',
    [
        checkSchema({
            code: {
                custom: {
                    options: checkCorrectCode,
                },
            },
            email: {
                isEmail: {
                    negate: false,
                    errorMessage: 'Invalid email',
                },
                custom: {
                    options: checkEmailNotInUse,
                },
                custom: {
                    options: checkIsANewUser,
                },
            },
        }),
        validateField,
    ],
    signUpCode
);

//sign up password
router.post(
    '/sign_up/password',
    [
        checkSchema({
            email: {
                isEmail: {
                    negate: false,
                    errorMessage: 'Invalid email',
                },
                custom: {
                    options: checkEmailNotInUse,
                },
                custom: {
                    options: checkIsANewUser,
                },
                custom: {
                    options: checkEmailIsValidated,
                },
            },
            password: {
                custom: {
                    options: validatePassword,
                },
            },
        }),
        validateField,
    ],
    signUpPassword
);

//login
router.post(
    '/login',
    [checkEmailExists, checkCorrectPassword, validateField],
    logIn
);

router.get(
    '/token_verification',
    [validateJWT, validateField],
    tokenVerification
);

router.put(
    '/email',
    [
        validateJWT,
        // validateUpdate,
        checkSchema({
            email: {
                isEmail: {
                    negate: false,
                    errorMessage: 'Invalid email',
                },
                custom: {
                    options: checkEmailNotInUse,
                },
            },
        }),
        validateField,
    ],
    updateUserEmail
);

router.put(
    '/password',
    [
        validateJWT,
        // validateUpdate,
        checkSchema({
            email: {
                isEmail: {
                    negate: false,
                    errorMessage: 'Invalid email',
                },
                custom: {
                    options: checkEmailNotInUse,
                },
            },
            password: {
                isLength: {
                    options: {
                        min: 8,
                    },
                    errorMessage: 'Password must be at least 8 characters long',
                },
                matches: {
                    options:
                        /^(?!.*(?:123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz))(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
                    errorMessage:
                        'Password must contain at least one number, one uppercase letter, one lowercase letter, and one permited special character. And not a consecutive serie',
                },
            },
        }),
        validateField,
    ],
    updateUserPassword
);

router.delete('/', [validateJWT, validateField], deleteUser);

export default router;
