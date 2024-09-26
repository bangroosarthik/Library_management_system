const { Library } = require('../dist/Library');
const { Book } = require('../dist/Book');

//describe function is used to club multiple testcases inside a single block 
//Unit Testing done for each feature.
describe('Library Management System', () => {
    let library;

    //Before Assertion beforeEach function will run 
    beforeEach(() => {
        library = new Library();
    });

    //Assertion 
    test('should add a book to the library', () => {
        const book = new Book('123', 'Test Book', 'Author', 2022);
        library.addBook(book);

        expect(library.viewAvailableBooks()).toContainEqual(book);
    });
});