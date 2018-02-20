const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

const mailgun = require('./mailgun');

app.post('/mail', mailgun);

app.use(express.static(path.resolve('public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Website listening on port ${PORT}!`));
