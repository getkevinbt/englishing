import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PitctureRefSchema = new Schema(
    {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
    },
    { _id: false },
);

const PicsToWordSchema = new Schema({
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    pictures: {
        type: [PitctureRefSchema],
        required: true,
        length: 4,
    },
    thematic: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
    },
    word: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
        validate: {
            validator: (v) => /^[a-z]+(-[a-z]+)*$/.test(v),
            message: (props) =>
                `${props.value} is not a valid word. Only lowercase letters and hyphens are allowed.`,
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

PicsToWordSchema.methods.getDefaultForUsers = function () {
    const { word } = this.toObject();
    const w = word
        .split("-")
        .map((segmentWord) => scrambler(segmentWord))
        .join("-")
        .split("");
    return {
        placed: w.map((c) => (c === "-" ? c : "_")),
        unplaced: w.filter((c) => c !== "-"),
    };
};

PicsToWordSchema.methods.checkAnswer = function (word = "") {
    return word === this.word;
};

PicsToWordSchema.methods.getPublicFields = function () {
    const { _id, __v, word, ...publicPicsToWord } = this.toObject();
    publicPicsToWord.id = _id;
    return publicPicsToWord;
};

PicsToWordSchema.methods.toJSON = function () {
    const { __v, _id, ...picsToWord } = this.toObject();
    picsToWord.id = _id;
    return picsToWord;
};

export default model("PicsToWord", PicsToWordSchema);
