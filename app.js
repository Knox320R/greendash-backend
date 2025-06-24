const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors')
const bodyParser = require("body-parser")

require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use(bodyParser.json());

app.use(errorHandler);

module.exports = app; 