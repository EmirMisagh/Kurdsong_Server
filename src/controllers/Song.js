const { Response, Request, NextFunction } = require("express");
const mongoose = require("mongoose");
const Author = require("../models/Author");
const { Logging } = require("../library/Logging");

const createAuthor = (req, res, next) => {};
const readAuthor = (req, res, next) => {
  const { name } = req.body;

  const author = new Author({
    _id: mongoose.Types.ObjectId(),
    name,
  });
};
const readAllAuthor = (req, res, next) => {
  return Author.find()
    .then((authors) => res.status(200).json({ authors }))
    .catch((error) => res.status(500).json({ error }));
};
const updateAuthor = (req, res, next) => {
  const { name } = req.body;

  const author = new Author({
    name,
  });
};
const deleteAuthor = (req, res, next) => {
  const { name } = req.body;

  const author = new Author({
    _id: mongoose.Types.ObjectId(),
    name,
  });
};

module.exports = { createAuthor, readAllAuthor };
