const {Router} = require('express')
const router = Router()
const {authorController} = require("../controllers/author.controller")

router.post('/author',authorController.createAuthor);
module.exports = router