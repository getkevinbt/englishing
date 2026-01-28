import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS);
        return { status: 1 };
    } catch (err) {
        return { err };
    }
};
