const Book = require('./book');
let book_db = require('../fake-db');

module.exports = class BookList {
  books = book_db;
  constructor(books) {
    this.books = books.map(Book);
  }
  getBook(bookId) {
    return this.books[bookId];
  }
  addBook(details) {
    this.books.push(new Book(details));
    return this.books;
  }
  removeBook(bookId) {
    this.books.splice(bookId, 1);
    return this.books;
  }
};
