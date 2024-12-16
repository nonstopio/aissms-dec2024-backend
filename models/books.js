const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);

