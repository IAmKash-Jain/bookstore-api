const express = require("express");
const router = new express.Router();
const booksController = require("../controllers/book-controllers");

router.get("/", booksController.getAllBooks);
router.get("/books", booksController.getAllBooks);
router.get("/book/:id",booksController.getBookById);

router.post("/book",booksController.addBook);

router.put("/book/:id",booksController.updateBookById);

router.delete("/book/:id",booksController.deleteBookById);


module.exports = router;
