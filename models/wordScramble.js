import mongoose from "mongoose";
const { Schema, model } = mongoose;

const WordScrambleSchema = new Schema({
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
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
        required: true,
        validate: {
            validator: function (words) {
                return (
                    0 < words.length &&
                    words.length < 5 &&
                    words
                        .map((w) => w.toLowerCase())
                        .every(
                            (w) =>
                                typeof w === "string" &&
                                0 < w.length &&
                                w.length < 21 &&
                                /^[a-z]+(?:-[a-z]+)*$/.test(w),
                        )
                );
            },
            message: (props) =>
                `expected between 1 and 4 words, but got ${props.value.length}, and all words must be strings of 1-20 letters (a-z and -) only`,
        },
    },
});

const scrambler = (segmentWord) => {
    const arr = segmentWord.split("");

    do {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    } while (arr.join("") === segmentWord);

    return arr.join("");
};

WordScrambleSchema.methods.getDefaultForUsers = function () {
    const { words = [] } = this.toObject();
    return words
        .map((w) =>
            w
                .split("-")
                .map((segmentWord) => scrambler(segmentWord))
                .join("-")
                .split(""),
        )
        .map((w) => ({
            unplaced: w.filter((c) => c !== "-"),
            placed: w.map((c) => (c === "-" ? c : "_")),
            solved: false,
        }));
};

WordScrambleSchema.methods.checkAnswer = function (index, word) {
    const { words = [] } = this.toObject();
    return words[index] === word;
};

WordScrambleSchema.methods.getPublicFields = function () {
    const { __v, _id, words, ...wordScramble } = this.toObject();
    wordScramble.id = _id;
    return wordScramble;
};

WordScrambleSchema.methods.toJSON = function () {
    const { __v, _id, ...wordScramble } = this.toObject();
    wordScramble.id = _id;
    return wordScramble;
};

export default model("WordScramble", WordScrambleSchema);
