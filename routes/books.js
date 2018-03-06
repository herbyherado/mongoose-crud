const express = require('express')
const book = express.Router()
const bookController = require('../controllers/book.controller')

book.post('/', bookController.create)
book.get('/', bookController.read)
book.put('/:id', bookController.update)
book.delete('/:id', bookController.delete)

module.exports = book