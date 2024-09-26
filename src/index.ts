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