import { NewUser, User } from "../models/index.js";

const checkCorrectCode = async (code) => {
    if (typeof code !== "string" || code.length !== 6 || !/^\d{6}$/.test(code))
        throw new Error("invalid code format");
};

const checkEmailIsValidated = async (email) => {
    const new_user = await NewUser.findOne({ email, emailValidated: true });
    if (!new_user) throw new Error("email not validated");
};

const checkEmailNotInUse = async (email) => {
    const user = await User.findOne({ email });
    if (user) throw new Error("email used");
};

const checkIsANewUser = async (email) => {
    const new_user = await NewUser.findOne({ email });
    if (!new_user) throw new Error("wrong email");
};

export {
    checkCorrectCode,
    checkEmailIsValidated,
    checkEmailNotInUse,
    checkIsANewUser,
};
