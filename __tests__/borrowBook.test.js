const { Library } = require('../dist/Library');
const { Book } = require('../dist/Book');

describe('Library Management System', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should allow borrowing an available book', () => {
        const book = new Book('123', 'Test Book', 'Author', 2022);
        library.addBook(book);
        library.borrowBook('123');
        expect(library.viewAvailableBooks()).not.toContain(book);
    });
});