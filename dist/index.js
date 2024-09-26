"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./Library");
var Book_1 = require("./Book");
var readline = __importStar(require("readline-sync"));
var library = new Library_1.Library();
function showMenu() {
    console.log('\nLibrary Management System');
    console.log('1. Add Book');
    console.log('2. Borrow Book');
    console.log('3. Return Book');
    console.log('4. View Available Books');
    console.log('5. Exit');
}
function addBook() {
    var isbn = readline.question('Enter ISBN: ');
    var title = readline.question('Enter Title: ');
    var author = readline.question('Enter Author: ');
    var year = parseInt(readline.question('Enter Publication Year: '), 10);
    var book = new Book_1.Book(isbn, title, author, year);
    library.addBook(book);
    console.log('Book added successfully.');
}
function borrowBook() {
    var isbn = readline.question('Enter ISBN of the book to borrow: ');
    try {
        library.borrowBook(isbn);
        console.log('Book borrowed successfully.');
    }
    catch (error) {
        console.log(error.message);
    }
}
function returnBook() {
    var isbn = readline.question('Enter ISBN of the book to return: ');
    try {
        library.returnBook(isbn);
        console.log('Book returned successfully.');
    }
    catch (error) {
        console.log(error.message);
    }
}
function viewAvailableBooks() {
    var books = library.viewAvailableBooks();
    if (books.length === 0) {
        console.log('No books available.');
    }
    else {
        console.log('\nAvailable Books:');
        books.forEach(function (book) {
            console.log("".concat(book.title, " by ").concat(book.author, " (ISBN: ").concat(book.isbn, ")"));
        });
    }
}
function main() {
    while (true) {
        showMenu();
        var choice = readline.question('Enter your choice: ');
        switch (choice) {
            case '1':
                addBook();
                break;
            case '2':
                borrowBook();
                break;
            case '3':
                returnBook();
                break;
            case '4':
                viewAvailableBooks();
                break;
            case '5':
                console.log('Exiting...');
                process.exit();
            default:
                console.log('Invalid choice, please try again.');
        }
    }
}
main();
