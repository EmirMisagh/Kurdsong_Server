const express = require("express");
const controler = require("../controllers/Author");


const router = express.Router()

router.get('/', controler.readAllAuthor)

router.post('/create', controler.createAuthor)

module.exports = router;