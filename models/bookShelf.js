const Book = require('./book');
let book_db = require('../db/fake-db');

let books = book_db.map(b => new Book(b));

module.exports = {
  getAllBooks() {
    return books;
  },
  getBook(bookId) {
    return this.books[bookId];
  },
  addBook(details) {
    this.books.push(new Book(details));
    return this.books;
  },
  removeBook(bookId) {
    this.books.splice(bookId, 1);
    return this.books;
  }
};
