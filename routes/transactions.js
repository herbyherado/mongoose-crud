const express = require('express')
const transaction = express.Router()
const transactionController = require('../controllers/transaction.controller')
const middleware = require('../middleware/date')

transaction.post('/', middleware.duedate, transactionController.create)
transaction.get('/', transactionController.read)
transaction.put('/:id', middleware.indate, transactionController.update)
transaction.delete('/:id', transactionController.delete)

module.exports = transaction