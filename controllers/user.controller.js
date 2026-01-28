// import { User } from "../models/index.js";
import { generateJWT } from "../helpers/generateJWT.js";

export const userProfile = async ({ body: { user, newToken } }, res) => {
    const { id, ...userData } = user;

    const response = { user: userData };

    if (newToken) {
        const { token, expiresAt } = await generateJWT(user);
        response.token = token;
        response.expiresAt = expiresAt;
        response.msg = "token renewed";
    }
    return res.json(response);
};
