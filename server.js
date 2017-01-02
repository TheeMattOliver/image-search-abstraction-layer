if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const bodyParser = require('body-parser');

const db = require('./config/db');
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use('/', routes);
app.get('*', routes);


const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
	console.log(`Server listening on port: ${port}`);
});

