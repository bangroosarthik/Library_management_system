const { Library } = require('../dist/Library');
const { Book } = require('../dist/Book');

describe('Library Management System', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should list available books', () => {
        const book1 = new Book('123', 'Test Book 1', 'Author', 2022);
        const book2 = new Book('456', 'Test Book 2', 'Author', 2021);
        library.addBook(book1);
        library.addBook(book2);
        expect(library.viewAvailableBooks()).toEqual([book1, book2]);
    });    
});