const { Library } = require('../dist/Library');
const { Book } = require('../dist/Book');

describe('Library Management System', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should add a book to the library', () => {
        const book = new Book('123', 'Test Book', 'Author', 2022);
        library.addBook(book);

        expect(library.viewAvailableBooks()).toContainEqual(book);
    });
});