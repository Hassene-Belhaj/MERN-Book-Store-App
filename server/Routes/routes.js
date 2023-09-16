const express = require('express');
const router = express.Router()
const { getAllBooks, postBook, deleteBook, getSingleBook, updateBook, uploadImage } = require('../Controllers/route');



// router.get('/' , getAllBooks)
// router.post('/post',postBook)

router.route('/upload-image').post(uploadImage)
router.route('/all').get(getAllBooks)
router.route('/single/:id').get(getSingleBook)
router.route('/post').post(postBook)
router.route('/delete/:id').delete(deleteBook)

router.route('/update/:id').patch(updateBook).post(postBook).delete(deleteBook)

module.exports = router


