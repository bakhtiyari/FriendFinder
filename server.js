// Dependencies.
var express = require('express');
var bodyParser = require('body-parser');

// Creating an express server
var app = express();

// PORT is the environment variable PORT, or 8080 if there's nothing there.
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// (Setting up middleware.)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

// Importing routes.
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start listening.
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});