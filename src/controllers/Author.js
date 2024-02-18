const { Response, Request, NextFunction } = require("express");
const mongoose = require("mongoose");
const Author = require("../models/Author");
const { Logging } = require("../library/Logging");

const createAuthor = (req, res, next) => {
  const {
    name,
    family,
    username,
    email,
    emailVerified,
    password,
    avatar,
    country,
    city,
    phone,
    admin,
  } = req.body;

  const author = new Author({
    name,
    family,
    username,
    email,
    emailVerified,
    password,
    avatar: "/user/image/" + avatar,
    country,
    city,
    phone,
    token: `${Math.round(Math.random() * 1E9)}token`,
    admin: admin,
    accses: true,
    result: [],
    notification: [],
    notificationSetting: [],
    singers: [],
    fovorite: [],
    fovoritePlaylist: [],
    socialAccont: [],
  });

  return author
    .save()
    .then((author) => {
      res.status(201).json({ author })
      Logging.info(
        `Incomming -> Method: [${req.method}] - Action: [Create User] = Result: [created] - Status: [${res.statusCode}]`
      );
    })
    .catch((error) => {
      res.status(500).json({ author: "error" });
      Logging.error(error);
    });
};
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
