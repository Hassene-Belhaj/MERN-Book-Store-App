const express = require('express');
const router = express.Router()
const { getAllBooks, postBook, deleteBook, getSingleBook, updateBook } = require('../Controllers/route');



// router.get('/' , getAllBooks)
// router.post('/post',postBook)

router.route('/all').get(getAllBooks)
router.route('/books:id').get(getSingleBook)
router.route('/post').post(postBook)
router.route('/delete/:id').delete(deleteBook)

router.route('/update/:id').get(getSingleBook).patch(updateBook).post(postBook).delete(deleteBook)

module.exports = router


