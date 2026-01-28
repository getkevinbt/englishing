import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ShuffleSchema = new Schema({
    type: { type: String, default: 'shuffled_word' },
    images: {
        type: [String], // Array of URLs or paths to the images
        required: true,
        validate: {
            validator: function (v) {
                return v.length === 2; // Ensure there are two images
            },
            message: (props) =>
                `Expected exactly 2 images, but got ${props.value.length}`,
        },
    },
    word: {
        type: String,
        required: true,
    },
});

ShuffleSchema.methods.toJSON = function () {
    const { __v, _id, word, ...shuffleWord } = this.toObject();
    shuffleWord.id = _id;
    shuffleWord.word = this.shuffle();
    return shuffleWord;
};

ShuffleSchema.methods.shuffle = function () {
    const { word } = this.toObject();
    let shuffledWord;
    do {
        shuffledWord = word
            .split('')
            .sort(() => Math.random() - 0.5)
            .join('');
    } while (shuffledWord === word);
    return shuffledWord;
};

export default model('ShuffledWord', ShuffleSchema);
