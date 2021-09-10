const express = require("express");
const { Book, validation } = require("../models/Book");
const mongoose = require("mongoose");

exports.getBooks = async (req, res) => {
  let books = await Book.find();

  res.send(books);
};

exports.getBookById = async (req, res) => {
  // res.send("one book");
  let book = await Book.findById(req.params.id);
  res.send(book);
};

exports.addBook = async (req, res) => {
  //   res.send("add book");
  try {
    await validation.validateAsync(req.body);
  } catch (err) {
    return res.send(err.details[0].message);
  }

  let book = await Book({
    title: req.body.title,
    author: req.body.author,
  });

  book = await book.save();
  res.send(book);
};
exports.editBook = async (req, res) => {
  try {
    await validation.validateAsync(req.body);
  } catch (err) {
    return res.send(err.details[0].message);
  }
  let book = await Book.findByIdAndUpdate(req.params.id, {
    author: req.body.author,
    title: req.body.title,
  });

  book = await book.save();

  res.send(book);
};

exports.deleteBook = async (req, res) => {
  let book = await Book.findByIdAndDelete(req.params.id);

  res.send(book);
};
