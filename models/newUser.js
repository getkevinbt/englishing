import mongoose from "mongoose";
const { Schema, model } = mongoose;

// const newCode = () => {
// 	const L = Math.floor(Math.random() * 3) + 6; // 6, 7 u 8
// 	const min = Math.pow(10, L - 1);
// 	const max = Math.pow(10, L) - 1;
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const NewUserSchema = new Schema({
    code: {
        type: String,
        required: [true, "code is required"],
        minlength: [6, "code must be 6 digits"],
        maxlength: [6, "code must be 6 digits"],
        validate: {
            validator: function (v) {
                return /^\d{6}$/.test(v);
            },
            message: "code must be a 6-digit string",
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: "10m" },
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "email must be a valid email address",
        },
    },
    emailValidated: {
        type: Boolean,
        default: false,
    },
});

NewUserSchema.methods.toJSON = function () {
    const { __v, _id, code, createdAt, ...new_user } = this.toObject();
    return new_user;
};

export default model("NewUser", NewUserSchema);
