const {DataSource} = require("typeorm")
const Book = require("./entity/book")

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "library",
    entities: [Book],
    synchronize: true
})



module.exports = AppDataSource