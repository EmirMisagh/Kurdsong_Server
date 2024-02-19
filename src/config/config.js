const dotenv = require('dotenv')

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";


const LIARA_ENDPOINT = process.env.LIARA_ENDPOINT
const LIARA_BUCKET_NAME = process.env.LIARA_BUCKET_NAME
const LIARA_ACCESS_KEY = process.env.LIARA_ACCESS_KEY
const LIARA_SECRET_KEY = process.env.LIARA_SECRET_KEY

// const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@kordsong.bmn71ml.mongodb.net/`;
const MONGO_URL = 'mongodb://127.0.0.1:27017/kurdsong'

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3000;

const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
  liara : {
    LIARA_ENDPOINT,
    LIARA_BUCKET_NAME,
    LIARA_ACCESS_KEY,
    LIARA_SECRET_KEY
  }
};

module.exports = { config }
