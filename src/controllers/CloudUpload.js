const { config } = require("../config/config");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const express = require("express");
const router = express.Router();

let Song = {
  image: "",
  music: "",
};


const configVar = {
  endpoint: config.liara.LIARA_ENDPOINT + "/song/image",
  accessKeyId: config.liara.LIARA_ACCESS_KEY,
  secretAccessKey: config.liara.LIARA_SECRET_KEY,
  region: "default",
  correctClockSkew: true,
};

const s3 = new AWS.S3(configVar);

const SongImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME,
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});

const SongMusic = multer({
    storage: multerS3({
      s3,
      bucket: config.liara.LIARA_BUCKET_NAME,
      key: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname);
      },
    }),
  });

module.exports = { SongImage, Song };
