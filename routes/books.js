const express = require("express");
const router = express.Router();
const {
  getBooks,
  getBookById,
  addBook,
  editBook,
  deleteBook,
} = require("../controller/booksController");

router.get("/books", getBooks);

router.get("/books/:id", getBookById);

router.post("/books", addBook);

router.put("/books/:id", editBook);

router.delete("/books/:id", deleteBook);

module.exports = router;
