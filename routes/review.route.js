const { Router } = require('express')
const router = Router()
const { reviewController } = require('../controllers/review.controller')

router.post('/review', reviewController.createReviewBook)
router.delete('/review/:id',reviewController.deleteReview)
router.get('/review/:id',reviewController.getReviewBook)



module.exports = router