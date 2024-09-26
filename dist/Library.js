"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.borrowBook = function (isbn) {
        var book = this.books.find(function (b) { return b.isbn === isbn && b.available; });
        if (!book) {
            throw new Error('Book is not available');
        }
        book.available = false;
    };
    Library.prototype.returnBook = function (isbn) {
        var book = this.books.find(function (b) { return b.isbn === isbn; });
        if (!book || book.available) {
            throw new Error('Book not found or already available');
        }
        book.available = true;
    };
    Library.prototype.viewAvailableBooks = function () {
        return this.books.filter(function (book) { return book.available; });
    };
    return Library;
}());
exports.Library = Library;
