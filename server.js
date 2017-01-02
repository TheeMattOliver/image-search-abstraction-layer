if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const bodyParser = require('body-parser');

const db = require('./config/db');
const express = require('express');
const routes = require('./routes/index');
const path = require('path');

const app = express();

app.use(express.static(__dirname + "/public"));
app.use('/public/templates', express.static(path.join(__dirname, 'templates')));

app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
	console.log(`Server listening on port: ${port}`);
});

