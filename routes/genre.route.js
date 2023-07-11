const {Router} = require('express');
const router = Router();
const {genreController} = require('../controllers/genre.controller');

router.get('/genre', genreController.getGenre);
router.post('/addGenre', genreController.createGenre);
router.delete('/genre/:id',genreController.deleteGenre)


module.exports = router;