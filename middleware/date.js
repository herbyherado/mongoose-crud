const model = require('../models/Transaction')

function duedate(req, res, next){
    let days = req.body.days
    req.body.due_date = new Date(Date.now() + days * 864e5)
    next()
}

function indate(req, res, next){
    model.findById(req.params.id,(err, record) => {
        let difference =  +new Date(req.body.in_date) - (+record.due_date)
        let day_fine = new Date(difference) / 864e5

        if (day_fine >= 1){
            let booksLength = record.booklist.length
            req.body.fine = booksLength * 500 * Math.ceil(day_fine)
        } else {
            req.body.fine = 0
        }
        next()
    })
}
// console.log(new Date('2018-06-14')*1)
module.exports = {duedate: duedate, indate:indate}
