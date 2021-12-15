const { Schema, model } = require('mongoose');

const characterSchema = new Schema(


);

const Character = model('Character', characterSchema);

module.exports = Character;
