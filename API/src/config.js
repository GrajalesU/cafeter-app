const dotenv = require('dotenv');

dotenv.config();

const configuration = {
  port: process.env.PORT || 3001,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
};

module.exports = configuration;
