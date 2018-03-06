const Transaction = require('../models/Transaction')

module.exports = {
    create: function (req, res){
       const newTransaction = new Transaction(req.body)
       newTransaction.save(err => {
           if (err) return res.status(500).send(err)
           return res.status(200).json({
               message:"inserted new transaction",
               transaction: newTransaction
           })
       })
    },
    read: function (req, res){
        Transaction.find((err, transaction) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message:"successfully retrieved transaction informations",
                transaction
            })
        })
        .populate('member')
        .populate('booklist')
    },
    update: function (req, res){
        Transaction.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, transaction) => {
            if (err) return res.status(500).send(err)
            return res.json({
                message: "information successfully updated",
                transaction
            })
        })
        .populate('member')
        .populate('booklist')
    },
    delete: function (req, res){
        Transaction.findByIdAndRemove(req.params.id, (err, transactions) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message: "Transaction successfully deleted",
                id: transactions._id
            })
        })
    }

}