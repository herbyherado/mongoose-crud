const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})

// converts bookSchema into a Model that can be work with
const Book = mongoose.model('Book', bookSchema)

module.exports = Book