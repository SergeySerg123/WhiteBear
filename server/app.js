const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
require('./db/db');

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

module.exports = app;