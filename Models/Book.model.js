const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
   title: String,
   auothor: String,
   genre: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Genre'
   }
});

const Book = mongoose.model("Book", bookSchema)
module.exports = Book