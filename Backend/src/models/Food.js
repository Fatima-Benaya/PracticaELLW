const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  image: String,
  stars: Number,
  cookTime: String,
  favorite: Boolean,
  origins: [String],
  tags: [String],

  // 🔴 ESTO FALTABA
  description: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);

