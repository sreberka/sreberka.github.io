const express = require('express');
const app = express();
const port = 8000;
const router = require('./routes/index');
const error = require('./middlewares/error');

app.use('/', router);
app.use(error);

module.exports = app.listen(port);