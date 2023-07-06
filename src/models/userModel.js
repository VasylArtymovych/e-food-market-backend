const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
});

module.exports = model('User', userSchema);
