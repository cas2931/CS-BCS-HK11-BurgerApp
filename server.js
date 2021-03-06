var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();  
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars"); 
var routes = require('./controllers/burger_controller.js'); 

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(methodOverride('_method'));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});