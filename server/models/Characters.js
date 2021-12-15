const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
        },
        class: {
            type: String,
            required: true,
        },
        race: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            required: true,
        },
        background: {
            type: String
        },
        skills: {
            type: String,
        }
    }


);

const Character = model('Character', characterSchema);

module.exports = Character;
