const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { config } = require("./config/config");
const { Logging } = require("./library/Logging");
const cors = require('cors');


const authorRoutes = require('./routes/Author');
const uploadRoutes = require('./routes/Upload');

const router = express();

// Connect to mongo

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to mongodb");
    startServer();
  })
  .catch((error) => {
    Logging.error("Unable to connect:");
    console.log(error);
  });

//   Only start the server if mongo connects
const startServer = () => {
  router.use((req, res, next) => {
    // Log the request
    Logging.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] = IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      Logging.info(
        `Incomming -> Method: [${req.method}] - Url: [${req.url}] = IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });
    next();
  });

  router.use(express.urlencoded({ extended: true }));
  router.use(express.static(__dirname + './../public'));
  router.use(express.json());
  router.use(cors());

  //   Rules of our API
  router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authoriztion"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Origin",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  // Routes

router.use('/author', authorRoutes)
router.use('/upload', uploadRoutes)

  // Healthcheck
  router.get("/ping", (req, res, next) =>
    res.status(200).json({ message: "pong" })
  );

  //   Error handling
  router.use((req, res, next) => {
    const error = new Error("not found");
    Logging.error(error);
    return res.status(404).json({ message: error.message });
  });

  http.createServer(router).listen(config.server.port, () => Logging.info(`Server is runnig on port ${config.server.port}.`));
};
