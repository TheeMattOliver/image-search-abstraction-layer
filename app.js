const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use('/', routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
	console.log(`Server listening on port: ${port}`);
});

