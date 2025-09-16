const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
const auth = require('../middleware/auth-middleware');

// Public Routes
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// Protected Routes (require JWT authentication)
router.post('/', auth, bookController.createBook);
router.put('/:id', auth, bookController.updateBook);
router.delete('/:id', auth, bookController.deleteBook);

module.exports = router;