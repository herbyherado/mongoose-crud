const express = require('express')
const customer = express.Router()
const customerController = require('../controllers/customer.controller')

customer.post('/', customerController.create)
customer.get('/', customerController.read)
customer.put('/:id', customerController.update)
customer.delete('/:id', customerController.delete)

module.exports = customer