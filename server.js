// require express and other modules
//testing with a comment
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var profile = {
  name: "Yasuyoshi Sakamoto",
  githubLink: "https://github.com/yasuper8",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/18222976?v=3&s=460",
  personalSiteLink: "https://github.com/yasuper8/yasuper8.github.io",
  currentCity: "San Francisco, California",
  pets: [{name: "Moe", type: "Cat"}, {name: "Max", type: "Cat"}]
}

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


//Personal info route
app.get('/api/profile', function homepage(req, res) {
  res.json(profile);
});




/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/yasuper8/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "http://rocky-hollows-55860.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/photographers/:id", description: "Display one photographer"},
      {method: "GET", path: "/api/photographers", description: "Display all photographers"},
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"},
      {method: "DELETE", path: "/api/photographer/:id", description: "Delete a photographer"}, // CHANGE ME
      {method: "POST", path: "/api/photographers", description: "Create a new photographer"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
