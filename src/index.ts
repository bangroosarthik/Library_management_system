import { Library } from './Library';
import { Book } from './Book';
import * as readline from 'readline-sync';

const library = new Library();

function showMenu() {
    console.log('\nLibrary Management System');
    console.log('1. Add Book');
    console.log('2. Borrow Book');
    console.log('3. Return Book');
    console.log('4. View Available Books');
    console.log('5. Exit');
}

function addBook() {
    const isbn = readline.question('Enter ISBN: ');
    const title = readline.question('Enter Title: ');
    const author = readline.question('Enter Author: ');
    const year = parseInt(readline.question('Enter Publication Year: '), 10);

    const book = new Book(isbn, title, author, year);
    library.addBook(book);
    console.log('Book added successfully.');
}

function borrowBook() {
    const isbn = readline.question('Enter ISBN of the book to borrow: ');
    try {
        library.borrowBook(isbn);
        console.log('Book borrowed successfully.');
    } catch (error) {
        console.log(error.message);
    }
}

function returnBook() {
    const isbn = readline.question('Enter ISBN of the book to return: ');
    try {
        library.returnBook(isbn);
        console.log('Book returned successfully.');
    } catch (error) {
        console.log(error.message);
    }
}