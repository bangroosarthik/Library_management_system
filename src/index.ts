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


function viewAvailableBooks() {
    const books = library.viewAvailableBooks();
    if (books.length === 0) {
        console.log('No books available.');
    } else {
        console.log('\nAvailable Books:');
        books.forEach(book => {
            console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        });
    }
}

function main() {
    while (true) {
        showMenu();
        const choice = readline.question('Enter your choice: ');

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