const { config } = require("../config/config");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const express = require("express");
const router = express.Router();
const path = require("path");

const Song = {
  image: "",
  music: "",
};

const User = {
  avatar: "",
};

const configSongImage = {
  endpoint: config.liara.LIARA_ENDPOINT,
  accessKeyId: config.liara.LIARA_ACCESS_KEY,
  secretAccessKey: config.liara.LIARA_SECRET_KEY,
  region: "default",
  correctClockSkew: true,
};

const s3 = new AWS.S3(configSongImage);

const SongImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/song/image",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      Song.image = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const SongMusic = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/song/music",
    key: function (req, file, cb) {
        const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      Song.music = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const UserAvatar = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/user/avatar",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      User.avatar = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const PlaylistImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/playlist/image",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      User.avatar = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const AlbumImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/album/image",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      User.avatar = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const SingerImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/singer/image",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      User.avatar = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

const CategoryImage = multer({
  storage: multerS3({
    s3,
    bucket: config.liara.LIARA_BUCKET_NAME + "/category/image",
    key: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);
      User.avatar = uniqueSuffix;
      cb(null, uniqueSuffix);
    },
  }),
});

module.exports = {
  SongImage,
  SongMusic,
  UserAvatar,
  PlaylistImage,
  AlbumImage,
  CategoryImage,
  SingerImage,
  Song,
  User,
};
