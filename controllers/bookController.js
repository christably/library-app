/*
// controllers/bookController.js
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { bookSchema } = require('../validators/bookValidator');

const booksFilePath = path.join(__dirname, '../data/books.json');

// Read books.json
function readBooks() {
  const data = fs.readFileSync(booksFilePath);
  return JSON.parse(data);
}

// Write to books.json
function writeBooks(data) {
  fs.writeFileSync(booksFilePath, JSON.stringify(data, null, 2));
}

// GET all books
exports.getAllBooks = (req, res) => {
  const books = readBooks();
  res.success(books);
};

// GET book by ID
exports.getBookById = (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.error('Book not found', 404);
  res.success(book);
};

// POST new book
exports.createBook = (req, res) => {
  const { error, value } = bookSchema.validate(req.body);
  if (error) return res.error(error.details[0].message);

  const books = readBooks();
  const newBook = { id: uuidv4(), ...value };
  books.push(newBook);
  writeBooks(books);
  res.success(newBook, 'Book added');
};

// PUT update book
exports.updateBook = (req, res) => {
  const books = readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.error('Book not found', 404);

  const { error, value } = bookSchema.validate(req.body);
  if (error) return res.error(error.details[0].message);

  books[index] = { id: books[index].id, ...value };
  writeBooks(books);
  res.success(books[index], 'Book updated');
};

// DELETE book
exports.deleteBook = (req, res) => {
  const books = readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.error('Book not found', 404);

  const [deletedBook] = books.splice(index, 1);
  writeBooks(books);
  res.success(deletedBook, 'Book deleted');
};
*/



// controllers/bookController.js
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { bookSchema } = require('../validators/bookValidator');

const booksFile = path.join(__dirname, '../data/books.json');

// Helper functions
const readBooks = () => {
  const data = fs.readFileSync(booksFile, 'utf8');
  return JSON.parse(data);
};

const writeBooks = (books) => {
  fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
};

// Controller Methods
exports.getAllBooks = (req, res) => {
  const books = readBooks();
  res.success(books);
};

exports.getBookById = (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.error('Book not found', 404);
  res.success(book);
};

exports.createBook = (req, res) => {
  const { error, value } = bookSchema.validate(req.body);
  if (error) return res.error(error.details[0].message);
  const books = readBooks();
  const newBook = { id: uuidv4(), ...value };
  books.push(newBook);
  writeBooks(books);
  res.success(newBook, 'Book added');
};

exports.updateBook = (req, res) => {
  const books = readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.error('Book not found', 404);
  const { error, value } = bookSchema.validate(req.body);
  if (error) return res.error(error.details[0].message);
  books[index] = { id: books[index].id, ...value };
  writeBooks(books);
  res.success(books[index], 'Book updated');
};

exports.deleteBook = (req, res) => {
  const books = readBooks();
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.error('Book not found', 404);
  const deleted = books.splice(index, 1);
  writeBooks(books);
  res.success(deleted[0], 'Book deleted');
};