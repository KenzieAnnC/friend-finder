var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;

/// Add middleware  ///
app.use(express.static("app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

/// Add the application routes ///
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


/// Start listening on PORT ///
app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});