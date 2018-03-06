const Book = require('../models/Books')

module.exports = {
    create: function (req, res){
       const newBook = new Book(req.body)
       newBook.save(err => {
           if (err) return res.status(500).send(err)
           return res.status(200).json({
               message:"inserted new book",
               book: newBook
           })
       })
    },
    read: function (req, res){
        Book.find((err, books) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message:"successfully retrieved book informations",
                books
            })
        })
    },
    update: function (req, res){
        Book.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, books) => {
            if (err) return res.status(500).send(err)
            return res.json({
                message: "information successfully updated",
                books
            })
        })
    },
    delete: function (req, res){
        Book.findByIdAndRemove(req.params.id, (err, books) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message: "Book successfully deleted",
                id: books._id
            })
        })
    }

}