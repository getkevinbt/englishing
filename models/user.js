import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const { Schema, model } = mongoose;

const uuidToDecimal = (uuid) => {
    return BigInt("0x" + uuid.replace(/-/g, "")).toString();
};

const getUniquePublicID = async () => {
    let uid;
    let existingUser;

    do {
        uid = uuidToDecimal(uuidv4());
        existingUser = await mongoose.models.User.findOne({ publicID: uid });
    } while (existingUser);

    return uid;
};

const UserSchema = new Schema({
    email: {
        required: [true, "email is required"],
        type: String,
        unique: true,
    },
    password: {
        current: {
            type: String,
        },
        oldPasswords: {
            type: [String],
            default: [],
        },
    },
    publicID: {
        type: String,
        unique: true,
    },
    role: {
        default: "user",
        enum: ["admin", "user"],
        type: String,
    },
    solution_progress: {
        type: [
            new Schema(
                {
                    unit: {
                        ref: "Unit",
                        required: true,
                        type: Schema.Types.ObjectId,
                    },
                    exercises: [
                        new Schema(
                            {
                                exercise: {
                                    ref: "Exercise",
                                    required: true,
                                    type: Schema.Types.ObjectId,
                                },
                                progress: {
                                    type: Object,
                                    default: {},
                                },
                                completed: {
                                    type: Boolean,
                                    default: false,
                                },
                            },
                            { _id: false },
                        ),
                    ],
                },
                { _id: false },
            ),
        ],
        default: [],
    },
});

UserSchema.pre("save", async function (next) {
    if (!this.publicID) this.publicID = await getUniquePublicID();
    next();
});

UserSchema.methods.getProgressData = function (unitNumber, exerciseIndex) {
    const unitProgress = this.solution_progress[unitNumber - 1];
    if (!unitProgress) return null;
    const { exercise, progress, completed } =
        unitProgress.exercises[exerciseIndex];
    return { exercise, progress, completed };
};

UserSchema.methods.toJSON = function () {
    const { __v, _id, password, ...user } = this.toObject();
    user.id = _id;
    return user;
};

export default model("User", UserSchema);
