module.exports = class Book {
  // a book on a shelf
  constructor(details) {
    this.title = details.title || 'emptybook name';
    this.author = details.author || 'emptybook author';
    this.description = details.description || 'emptybook description';
  }
};
