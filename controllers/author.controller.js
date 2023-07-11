const Author = require("../Models/Author.model")


module.exports.authorController = {
    createAuthor: (req,res) => {
       Author.create({
        name: req.body.name,
        information: req.body.information
       }).then((data) => {
        res.json(data)
       })
    },
}