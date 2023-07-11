const Genre = require('../Models/Genre.model');

module.exports.genreController = {
    getGenre: async (req, res) => {
        try {
            const data = await Genre.find({})
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    createGenre: async(req,res) => {
        const {title, description} = req.body
        try {
            const data = await Genre.create({
                title,
                description,
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    deleteGenre: (req,res) => {
        Genre.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    }
}