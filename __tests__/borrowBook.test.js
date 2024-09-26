const { Library } = require('../dist/Library');
const { Book } = require('../dist/Book');

//describe function is used to club multiple testcases inside a single block.
describe('Library Management System', () => {
    let library;

    //BeforeEach function will execute before checking assertion
    beforeEach(() => {
        library = new Library();
    });

    //Assertion Made
    test('should allow borrowing an available book', () => {
        const book = new Book('123', 'Test Book', 'Author', 2022);
        library.addBook(book);
        library.borrowBook('123');
        expect(library.viewAvailableBooks()).not.toContain(book);
    });
});