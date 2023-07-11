const { Router } = require("express");
const router = Router()
const { bookController } = require('../controllers/book.controller')

router.post('/book',bookController.createBook)
router.delete('/book/:id',bookController.deleteBook)
router.patch('/book/patch/:id',bookController.patchBookId)
router.get('/book/:id',bookController.getBookId)
router.get('/book', bookController.getBook)
router.get('/book/genre/:id',bookController.getBookGenre)

module.exports = router