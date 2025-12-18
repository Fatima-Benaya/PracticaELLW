const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  cookTime: { type: String, default: '' },
  favorite: { type: Boolean, default: false },
  origins: [{ type: String }],
  stars: { type: Number, default: 0, min: 0, max: 5 },
  imageUrl: { type: String, required: true },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);
