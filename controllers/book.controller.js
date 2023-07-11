const Book = require('../Models/Book.model');

module.exports.bookController = {
    createBook: (req, res) => {
        Book.create({
            title: req.body.title,
            auothor: req.body.auothor,
            genre: req.body.genre
        }).then((data) => {
            res.json(data)
        })
    },

    deleteBook: (req,res) => {
        Book.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },


    patchBookId: (req,res) => {
        Book.findByIdAndUpdate(req.params.id,req.body).then((data) => {
            res.json(data)
        })
    },

    getBookId: (req,res) => {
        Book.findById(req.params.id).then((data) =>  {
            res.json(data)
        })
    },
    getBook: (req,res) => {
        Book.find().then((data) => {
            res.json(data)
        })
    },


    getBookGenre: (req,res) => {
        Book.find({genre: req.params.id}).populate('genre').then((data) => res.json(data))
    }

    
}