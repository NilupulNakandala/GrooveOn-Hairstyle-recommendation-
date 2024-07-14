const {
  contactUs,
  emailInfo,
  productRating,
  getAllReviews,
  uploadImageFile,
  getRandomImages,
} = require('../controllers/groove.controller')
const upload = require('../services/multer/multer.service')
const router = require('express').Router()

router.post('/contact', contactUs)
router.post('/email', emailInfo)
router.post('/review', productRating)
router.get('/get-all-reviews', getAllReviews)
router.post('/recommendation', upload.single('file'), uploadImageFile)

module.exports = router
