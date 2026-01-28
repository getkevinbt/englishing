import bcryptjs from "bcryptjs";
import { NewUser, User } from "../models/index.js";
import { generateJWT } from "../helpers/generateJWT.js";
import { sendVerificationEmail } from "../helpers/email.js";

export const deleteUser = async (req, res) => {
    const { id } = req.body;
    try {
        await User.findByIdAndDelete(id);
        return res.json({ msg: "user deleted" });
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json({ msg: "internal server error - deleting user" });
    }
};

export const signUpEmail = async (req, res) => {
    const { email } = req.body;
    try {
        await NewUser.findOneAndDelete({ email });

        const { success, code, error } = await sendVerificationEmail(email);

        if (!success) {
            return res
                .status(500)
                .json({ msg: "internal server error - creating user", error });
        }

        const new_user = new NewUser({ email, code });
        new_user.save();

        return res.json(new_user);
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json({ msg: "internal server error - creating user" });
    }
};

export const signUpCode = async (req, res) => {
    const { email, code } = req.body;
    try {
        const new_user = await NewUser.findOne({ email });
        if (!new_user) return res.status(400).json({ msg: "code expired" });
        if (code !== new_user.code)
            return res.status(406).json({ msg: "wrong code" });
        await new_user.updateOne({
            createdAt: new Date(),
            emailValidated: true,
        });
        return res.json({ msg: "email validated" });
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json({ msg: "internal server error - creating user" });
    }
};

export const signUpPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({
            email,
            password: {
                current: bcryptjs.hashSync(password, 10),
            },
        });
        await NewUser.findOneAndDelete({ email });
        await user.save();
        return res.status(201).json({ msg: "user created" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            msg: "internal server error - creating password",
        });
    }
};

export const logIn = async (req, res) => {
    const { user, keep_login } = req.body;
    try {
        // Generate JWT
        const { token, expiresAt } = await generateJWT(user, keep_login);
        return res.json({ token, expiresAt });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            msg: "internal server error - signing in",
        });
    }
};

export const tokenVerification = async (req, res) => {
    const { user, newToken } = req.body;
    if (newToken) {
        const { token, expiresAt } = await generateJWT(user);
        return res.json({ token, expiresAt, msg: "token renewed" });
    } else return res.json({ msg: "token validated" });
};

export const updateUserEmail = async (req, res) => {
    const { email, id } = req.body;
    try {
        const user = await User.findById(id);
        // Update email
        if (!email.status)
            return res.status(400).json({ msg: "invalid email" });
        user.email = email.value;
        await user.save();
        return res.json({ msg: "user email updated successfully" });
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json("internal server error - updating user email");
    }
};

export const updateUserPassword = async (req, res) => {
    const { id, password } = req.body;
    try {
        const user = await User.findById(id);
        // Update password
        if (!password.status)
            return res.status(400).json({ msg: "invalid password" });
        user.password.oldPasswords.push(user.password.current);
        user.password.current = bcryptjs.hashSync(
            password.value,
            bcryptjs.genSaltSync()
        );
        await user.save();
        return res.json({ msg: "user password updated successfully" });
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json("internal server error - updating user password");
    }
};
