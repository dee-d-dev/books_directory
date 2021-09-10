const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("book", BookSchema);

const inputValidation = Joi.object({
  title: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
});

exports.Book = Book;
exports.validation = inputValidation;
