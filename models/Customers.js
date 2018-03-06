const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
})

// converts bookSchema into a Model that can be work with
const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer