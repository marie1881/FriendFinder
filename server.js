var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/html/css/style.css')));

// Add middleware for parsing incoming request bodies
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
  
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });
  

// Add the application routes
require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});