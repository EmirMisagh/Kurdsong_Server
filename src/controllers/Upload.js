const express = require('express');
const router = express.Router();
const multer = require('multer')



// Variables ---------------------------------------------------
// ---------------------------------------------------------------

let Song = {
    image: '',
    music: ''
}

let User = {
    avatar: ""
}

// UPLOUD FILE ---------------------------------------------------
// ---------------------------------------------------------------


// Songs Image ---------------------------------------------------
// ---------------------------------------------------------------


const songImage = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, './public/song/image')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname;
        Song.image = uniqueSuffix;
        return cb(null, uniqueSuffix)
    },
})

const songImageUpload = multer({ storage: songImage });


// Songs Music ---------------------------------------------------
// ---------------------------------------------------------------

const songMusic = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, './public/song/song')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname;
        Song.music = uniqueSuffix;
        return cb(null, uniqueSuffix)
    },
})

const songMusicUpload = multer({ storage: songMusic });

// User Avatar ---------------------------------------------------
// ---------------------------------------------------------------

const UserAvatar = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, './public/user/image')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname;
        User.avatar = uniqueSuffix;
        return cb(null, uniqueSuffix)
    },
})

const UserAvatarUpload = multer({ storage: UserAvatar });





module.exports = { songImageUpload, Song, UserAvatarUpload, User };