const AppDataSource = require("./data-source")
const {getBooks, createBooks, getBooksById, updateBooks, deleteBook} = require("./bookRepository")
const express = require("express")
const app = express()
app.use(express.json())

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        app.listen(3000, () => {
            console.log("App running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

app.get("/books", async (req, res)=>{
   try {
    const books = await getBooks()
    res.json(books)
   } catch (error) {
        return res.status(500).json(error.message)
   }
})

app.get("/books/:id", async (req, res)=>{
   try {
    const id = Number(req.params.id)
    const book = await getBooksById(id)

    if (!book) {
        return res.send("Invalid ID")
    }
     res.json(book)
   } catch (error) {
        return res.status(500).json(error.message)
   }
})

app.post("/books", async (req, res)=>{
   try {
    const {title, author} = req.body
    const book = await createBooks(title, author)
    res.status(201).json(book)
   } catch (error) {
        return res.status(500).json(error.message)
   }
})

app.put("/books/:id", async (req, res)=>{
    try {
        const id = Number(req.params.id)
        const {title, author} = req.body
        const book = await updateBooks(id, title, author)

        if (!book) {
            return res.json("Invalid ID")
        }

        res.json(book)

    } catch (error) {
        return res.status(500).json(error.message)
    }
})

app.delete("/books/:id", async (req, res)=>{
   try {
     const id = Number(req.params.id)
     const book = await deleteBook(id)
 
     if (!book) {
    return res.send("Invalid ID")
}
 
     res.send("book deleted succesfully")
   } catch (error) {
        return res.status(500).json(error.message)
   }
})
   