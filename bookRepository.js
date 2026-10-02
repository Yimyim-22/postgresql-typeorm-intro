const AppDataSource = require("./data-source");

async function getBooks(){
    const bookRepository = AppDataSource.getRepository("Book")
    
    const books = bookRepository.find()
    return books;
}

async function createBooks(title, author){
    const bookRepository = AppDataSource.getRepository("Book")
    
    const book = bookRepository.create({
        title, author
    })
    await bookRepository.save(book)
    return book
}

async function getBooksById(id){
    const bookRepository = AppDataSource.getRepository("Book")
    
    const bookById = bookRepository.findOne({
        where: {id: id}
    })

    if (!bookById) {
        return null
    }

    return bookById
}

async function updateBooks(id, title, author){
    const bookRepository = AppDataSource.getRepository("Book")
    const book = await bookRepository.findOne({
        where: {id: id}
    })

    if (!book) {
        return null;
    }

    book.title = title
    book.author = author
    
    await bookRepository.save(book)
    return book
}

async function deleteBook(id){
    const bookRepository = AppDataSource.getRepository("Book")
    const book = await bookRepository.findOne({
        where: {id: id}
    })

    if (!book) {
        return null
    }

    await bookRepository.delete(book.id)
    return book
}

module.exports = {getBooks, createBooks, getBooksById, updateBooks, deleteBook}