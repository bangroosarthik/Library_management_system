"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(isbn, title, author, publicationYear, available) {
        if (available === void 0) { available = true; }
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.available = available;
    }
    return Book;
}());
exports.Book = Book;
