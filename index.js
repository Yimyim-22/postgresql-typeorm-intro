const AppDataSource = require("./data-source");
const { getBooks, createBooks, getBooksById, updateBooks, deleteBook } = require("./bookRepository");

AppDataSource.initialize()
    .then(async () => {
        console.log("Database connected");

        const books = await getBooks();
        console.log(books);
        
        // const book = await createBooks("1984", "George Orwell");
        // console.log(book)

        const bookById = await getBooksById(988)
        console.log(bookById)

        const updateBook = await updateBooks(1, "1984: A book", "George Orwell")
        console.log(updateBook)

        const deletedBook = await deleteBook(1)
        console.log(deletedBook)

    })
    .catch((error) => {
        console.log(error);
    });