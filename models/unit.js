import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ExerciseRefSchema = new Schema(
    {
        item: {
            type: Schema.Types.ObjectId,
            required: true,
            refPath: "exercises.item",
        },
        kind: {
            type: String,
            required: true,
            enum: [
                "FillBlank",
                "Match",
                "PicsToWord",
                "WordScramble",
                "WordSearch",
            ],
        },
    },
    { _id: false }
);

const HistoryRefSchema = new Schema(
    {
        action: {
            type: String,
            enum: ["create", "update", "delete"],
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    { timestamps: true, _id: false }
);

const BackgroundImageRefSchema = new Schema(
    {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
    },
    { _id: false }
);

const UnitSchema = new Schema({
    backgroundImage: {
        type: BackgroundImageRefSchema,
    },
    description: {
        type: String,
    },
    exercises: {
        type: [ExerciseRefSchema],
        default: [],
    },
    history: {
        type: [HistoryRefSchema],
        default: [],
    },
    number: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
    },
});

function _autoPopulateHistory(next) {
    this.populate({
        path: "history.user",
        select: "email publicID _id",
    });
    next();
}

UnitSchema.pre("find", _autoPopulateHistory);
UnitSchema.pre("findOne", _autoPopulateHistory);
UnitSchema.pre("findOneAndUpdate", _autoPopulateHistory);
UnitSchema.pre("findOneAndDelete", _autoPopulateHistory);

UnitSchema.methods.toJSON = function () {
    const { __v, _id, history, ...unit } = this.toObject();
    unit.id = _id;

    return unit;
};

UnitSchema.methods.toJSONWithHistory = function () {
    const { __v, _id, ...unit } = this.toObject();
    unit.id = _id;
    return unit;
};

export default model("Unit", UnitSchema);
