import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FillBlankSchema = new Schema({
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    text: {
        type: String,
        required: true,
        validate: {
            validator: (text) => {
                const candidates = text.match(/\\\{[^}]*\}?/g) ?? [];

                if (candidates.length === 0) return false;

                return candidates.every((ph) =>
                    /^\\\{[a-zA-Z][a-z]*(?:-[a-z]+)*\}$/.test(ph),
                );
            },
            message: "text should have correct placeholder",
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
        type: [String],
        default: [],
    },
});

FillBlankSchema.pre("validate", function (next) {
    if (!this.text) return next();

    const candidates = this.text.match(/\\\{[^}]*\}?/g) || [];

    if (candidates.length === 0)
        return next(new Error("text must contain at least one placeholder"));
    else if (candidates.length > 10)
        return next(new Error("text can have at most 10 placeholders"));
    else if (
        !candidates.every(
            (ph) =>
                /^\\\{[a-zA-Z][a-z]*(?:-[a-z]+)*\}$/.test(ph) &&
                ph.slice(2, -1).length < 21,
        )
    )
        return next(
            new Error(
                "all placeholders must be in the format \\{word or word-word...} where word contains only lowercase letters and hyphens and is at most 20 characters long",
            ),
        );

    next();
});

FillBlankSchema.pre("save", function (next) {
    if (!this.text) return next();

    const words = [];
    let index = 0;

    this.text = this.text.replace(
        /\\\{([a-zA-Z][a-z]*(?:-[a-z]+)*)\}/g,
        (_, word) => {
            words.push(word);
            return `\\{${index++}}`;
        },
    );

    const unique = new Set(words);
    if (unique.size !== words.length) {
        return next(new Error("repeated placeholders are not allowed"));
    }

    if (
        words.length < 1 ||
        10 < words.length ||
        words.some((w) => 20 < w.length)
    )
        return next(
            new Error(
                "expected between 1 and 10 word objects and each word should have at most 20 characters",
            ),
        );

    this.words = words;

    next();
});

FillBlankSchema.methods.getDefaultForUsers = function () {
    const { words } = this.toObject();
    return {
        placed: [],
        given: words
            .map((w) => ({ w, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ w }) => w),
    };
};

FillBlankSchema.methods.checkAnswer = function (words = []) {
    const correctWords = this.words;
    if (words.length !== correctWords.length)
        return { msg: "incomplete request" };

    for (let i = 0; i < words.length; i++) {
        if (words[i] === correctWords[i]) words[i] = true;
        else words[i] = false;
    }

    if (words.every((w) => w)) return { correct: true, placed: words };
    return { correct: false, placed: words };
};

FillBlankSchema.methods.getPublicFields = function () {
    const { _id, difficulty, text, thematic } = this.toObject();
    return { id: _id, difficulty, text, thematic };
};

FillBlankSchema.methods.toJSON = function () {
    const { __v, _id, ...fillBlank } = this.toObject();
    fillBlank.id = _id;
    return fillBlank;
};

export default model("FillBlank", FillBlankSchema);
