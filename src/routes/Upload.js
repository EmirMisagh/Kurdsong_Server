const express = require("express");
const controler = require("../controllers/Upload");
const upload = require("../controllers/CloudUpload");
const { Logging } = require("../library/Logging");

const router = express.Router();

router.post(
  "/user/avatar",
  upload.UserAvatar.single("file"),
  (req, res) => {
    try {
        const { avatar } = upload.User
        Logging.info(
            `Incomming -> Method: [${req.method}] - Image Name: [${avatar}] = Result: [Uploaded] - Status: [${res.statusCode}]`
          );
      res.status(201).json({ 
        data: avatar,
        sucsec: true
    })
    } catch (error) {
      Logging.error(error);
      res.status(500).json({ 
        data: "Upload is unable",
        sucsec: false
    })
    }
  }
);

module.exports = router;
