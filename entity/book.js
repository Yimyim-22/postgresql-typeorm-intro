const {EntitySchema} = require("typeorm")

const Book = new EntitySchema({
    name: "Book",
    tableName: "books",
    
    columns:{
        id:{
            type: "integer",
            primary: true,
            generated: "increment"
        },
        title:{
            type: "varchar",
            length: 255
        },
        author:{
            type: "varchar",
            length: 255
        }
    }    
})

module.exports = Book