const bookRepository = require('../repository/bookRepository');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookRepository.getAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, publishedYear, genre } = req.body;
  try {
    const newBook = await bookRepository.create({ title, author, publishedYear, genre });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create book', error });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await bookRepository.getById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch book', error });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await bookRepository.updateById(req.params.id, req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update book', error });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookRepository.deleteById(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete book', error });
  }
};
