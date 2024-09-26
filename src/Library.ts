import { Book } from './Book';

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    borrowBook(isbn: string): void {
        const book = this.books.find(b => b.isbn === isbn && b.available);
        if (!book) {
            throw new Error('Book is not available');
        }
        book.available = false;
    }

    returnBook(isbn: string): void {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book || book.available) {
            throw new Error('Book not found or already available');
        }
        book.available = true;
    }

    viewAvailableBooks(): Book[] {
        return this.books.filter(book => book.available);
    }
}
