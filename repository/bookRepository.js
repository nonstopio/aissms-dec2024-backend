const Book = require('../models/books');

class BookRepository {
  async getAll() {
    return await Book.find();
  }

  async create(bookData) {
    const book = new Book(bookData);
    return await book.save();
  }

  async getById(id) {
    return await Book.findById(id);
  }

  async updateById(id, updateData) {
    return await Book.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return await Book.findByIdAndDelete(id);
  }
}

module.exports = new BookRepository();
