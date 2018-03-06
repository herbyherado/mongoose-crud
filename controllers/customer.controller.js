const Customer = require('../models/Customers')

module.exports = {
    create: function (req, res){
       const newCustomer = new Customer(req.body)
       newCustomer.save(err => {
           if (err) return res.status(500).send(err)
           return res.status(200).json({
               message:"inserted new customer",
               customer: newCustomer
           })
       })
    },
    read: function (req, res){
        Customer.find((err, customer) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message:"successfully retrieved customers informations",
                customer
            })
        })
    },
    update: function (req, res){
        Customer.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, customers) => {
            if (err) return res.status(500).send(err)
            return res.json({
                message: "information successfully updated",
                customers
            })
        })
    },
    delete: function (req, res){
        Customer.findByIdAndRemove(req.params.id, (err, customers) => {
            if (err) return res.status(500).send(err)
            return res.status(200).json({
                message: "Customer successfully deleted",
                id: customers._id
            })
        })
    }

}