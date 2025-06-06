const { fetchBook, addBook, deleteBook, updateBook, fetchSingleBook } = require('../controllers/bookController');

const router = require('express').Router();

router.route("/books").get(fetchBook).post(addBook);
router.route("/books/:id").delete(deleteBook).patch(updateBook).get(fetchSingleBook);

module.exports = router