import mongoose from "mongoose";

const { Schema, model } = mongoose;

const MatchSchema = new Schema({
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    columns: {
        type: [[String]],
        required: true,
        validate: {
            validator: function (v) {
                if (v.length !== 2) return false;
                for (let col of v) {
                    if (col.length > 6) return false;
                    for (let str of col) if (str.length > 15) return false;
                }
            },
            message:
                "columns must be a 2D array with 2 columns, each containing up to 6 concept related strings of max 15 characters",
        },
    },
    thematic: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
    },
});

MatchSchema.methods.getDefaultForUsers = function () {
    const { columns } = this.toObject();
    let firstCol = [...columns[0]];
    let secondCol = [...columns[1]];

    const coincidences = (a, b) => a.reduce((c, v, i) => c + (v === b[i]), 0);

    do {
        firstCol = firstCol.sort(() => Math.random() - 0.5);
    } while (coincidences(firstCol, columns[0]) >= 2);
    do {
        secondCol = secondCol.sort(() => Math.random() - 0.5);
    } while (coincidences(secondCol, columns[1]) >= 2);

    return { columns: [firstCol, secondCol], matches: {} };
};

MatchSchema.methods.checkAnswer = function (matches = {}) {
    const columns = this.columns;

    for (let i = 0; i < columns[0].length; i++) {
        matches[columns[0][i]] = {
            link: matches[columns[0][i]],
            correct: matches[columns[0][i]] === columns[1][i],
        };
    }

    return { correct: columns[0].every((e) => matches[e].correct), matches };
};

MatchSchema.methods.getPublicFields = function () {
    const { _id, difficulty, thematic } = this.toObject();
    return { id: _id, difficulty, thematic };
};

MatchSchema.methods.toJSON = function () {
    const { __v, _id, ...match } = this.toObject();
    match.id = _id;
    return match;
};

export default model("Match", MatchSchema);
