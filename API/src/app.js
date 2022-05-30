const express = require('express');
const cors = require('cors');
const routes = require('./routes/product');
const config = require('./config');

const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;
