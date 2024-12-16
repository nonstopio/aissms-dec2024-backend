// const express = require('express');
// const router = express.Router();
// const Book = require('../models/book');

// // Create a new book
// router.post('/', async (req, res) => {
//   try {
//     const book = new Book(req.body);
//     const savedBook = await book.save();
//     res.status(201).json(savedBook);
//   } catch (err) {
//     res.status(400).json({ message: 'Error creating book', error: err.message });
//   }
// });

// // Get all books
// router.get('/', async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching books', error: err.message });
//   }
// });

// // Get a book by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) return res.status(404).json({ message: 'Book not found' });
//     res.json(book);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching book', error: err.message });
//   }
// });

// // Update a book by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ message: 'Error updating book', error: err.message });
//   }
// });

// // Delete a book by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedBook = await Book.findByIdAndDelete(req.params.id);
//     if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
//     res.json({ message: 'Book deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting book', error: err.message });
//   }
// });

// module.exports = router;









const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CRUD routes
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;

