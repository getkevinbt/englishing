import mongoose from "mongoose";

const { Schema, model } = mongoose;

const WordSchema = new Schema(
    {
        word: {
            type: String,
            required: true,
            set: (word) => word.toLowerCase(),
            validate: {
                validator: (s) =>
                    0 < s.length &&
                    s.length < 21 &&
                    /^[a-z]+(?:-[a-z]+)*$/.test(s),
                message:
                    "word must be 1–20 lowercase letters (a–z) with optional hyphens",
            },
        },

        start: {
            type: [Number],
            required: true,
            validate: {
                validator: (v) =>
                    Array.isArray(v) &&
                    v.length === 2 &&
                    v.every(Number.isInteger),
                message: "start must be an array of two integers",
            },
        },

        end: {
            type: [Number],
            required: true,
            validate: {
                validator: (v) =>
                    Array.isArray(v) &&
                    v.length === 2 &&
                    v.every(Number.isInteger),
                message: "end must be an array of two integers",
            },
        },
    },
    { _id: false },
);

const getRandomLetter = () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26));

const WordSearchSchema = new Schema({
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    letterPool: {
        type: [[String]],
        required: true,
        set: (matrix) => matrix.map((row) => row.map((ch) => ch.toLowerCase())),
        validate: {
            validator: (matrix) =>
                Array.isArray(matrix) &&
                matrix.length > 0 &&
                matrix.every(
                    (row) =>
                        Array.isArray(row) &&
                        row.length === matrix[0].length &&
                        row.every(
                            (ch) =>
                                ch === "" ||
                                (/^[a-z]$/.test(ch) && ch.length === 1),
                        ),
                ),
            message:
                "letterPool must be a rectangular 2D array of single letters",
        },
    },
    thematic: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
    },
    words: {
        type: [WordSchema],
        required: true,
        validate: {
            validator: (words) => 0 < words.length && words.length < 11,
            message: "expected between 1 and 10 word objects",
        },
    },
});

WordSearchSchema.pre("validate", function (next) {
    if (!this.letterPool || !this.words) return next();

    const rows = this.letterPool.length;
    const cols = this.letterPool[0].length;

    const inBounds = ([x, y]) =>
        Number.isInteger(x) &&
        Number.isInteger(y) &&
        0 <= x &&
        x < rows &&
        0 <= y &&
        y < cols;

    for (const { start, end, word } of this.words) {
        if (!inBounds(start) || !inBounds(end)) {
            return next(
                new Error(
                    `start/end coordinates must be inside letterPool bounds (${rows}x${cols})`,
                ),
            );
        }

        if (!word || !start || !end) continue;

        const dx = end[0] - start[0];
        const dy = end[1] - start[1];
        const len = word.replace(/-/g, "").length;

        if (
            !(
                (dy === 0 && Math.abs(dx) + 1 === len) ||
                (dx === 0 && Math.abs(dy) + 1 === len) ||
                (Math.abs(dx) === Math.abs(dy) && Math.abs(dx) + 1 === len)
            )
        ) {
            return next(
                new Error(
                    `Word "${word}"'s start(${start})/end(${end}) coordinates do not match a horizontal, vertical, or diagonal placement`,
                ),
            );
        }
    }

    next();
});

WordSearchSchema.methods.getDefaultForUsers = function () {
    const { letterPool, words } = this.toObject();
    return {
        letterPool: letterPool.map((row) =>
            row.map((col) => (col === "" ? getRandomLetter() : col)),
        ),
        words: words.map(({ word }) => ({
            word,
            start: [],
            end: [],
            solved: false,
        })),
    };
};

WordSearchSchema.methods.checkAnswer = function (start, end) {
    const sameCoord = (a, b) =>
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === 2 &&
        b.length === 2 &&
        a[0] === b[0] &&
        a[1] === b[1];

    const { words = [] } = this.toObject();

    const index = words.findIndex(
        (w) => sameCoord(start, w.start) && sameCoord(end, w.end),
    );

    if (index === -1) return { index };

    return { index, word: words[index].word };
};

WordSearchSchema.methods.getPublicFields = function () {
    const { _id, letterPool, words, ...wordSearch } = this.toObject();
    wordSearch.id = _id;
    return wordSearch;
};

WordSearchSchema.methods.toJSON = function () {
    const { __v, _id, ...wordSearch } = this.toObject();
    wordSearch.id = _id;
    return wordSearch;
};

export default model("WordSearch", WordSearchSchema);
