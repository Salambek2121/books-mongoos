const { json } = require('express');
const Review = require('../Models/Review.model');

module.exports.reviewController ={

    createReviewBook: (req, res) => {
        Review.create({
        
    textReview: req.body.textReview,
    nameAuthorReview: req.body.nameAuthorReview,
    bookReview: req.params.id   
        }).then((data) => res.json(data))

    },

    deleteReview: (req, res) => {
        Review.findByIdAndRemove(req.params.id).then((data) => res.json(data))
    },

    getReviewBook: (req,res) => {
        Review.find({bookReview: req.params.id}).populate("bookReview").then((data) => {
            res,json(data)
        })
    }
}