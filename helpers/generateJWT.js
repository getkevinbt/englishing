import jwt from "jsonwebtoken";

export const generateJWT = async (
    { id = "", email = "" },
    keep_login = false
) => {
    try {
        return new Promise((resolve, reject) => {
            const payload = { id, keep_login };
            const options = {
                expiresIn: keep_login ? "30d" : "10m",
                subject: email,
            };

            jwt.sign(
                payload,
                process.env.SECRETORPRIVATEKEY,
                options,
                (err, token) => {
                    if (err) {
                        console.error(err);
                        reject("server cannot generate a jwt");
                    } else {
                        resolve({
                            token,
                            expiresAt:
                                new Date().getTime() +
                                (keep_login ? 2592000000 : 600000),
                        });
                    }
                }
            );
        });
    } catch (error) {
        console.error(error);
        throw new Error("server cannot generate a jwt");
    }
};
