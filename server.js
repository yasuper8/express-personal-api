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



/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */


 ///////////////////////////
 ////////Profile route//////
 ///////////////////////////

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// var new_profile = {
//   name: "Yasuyoshi Sakamoto",
//   githubLink: "https://github.com/yasuper8",
//   githubProfileImage: "https://avatars2.githubusercontent.com/u/18222976?v=3&s=460",
//   personalSiteLink: "https://github.com/yasuper8/yasuper8.github.io",
//   currentCity: "San Francisco, California",
//   pets: [{name: "Moe", type: "Cat"}, {name: "Max", type: "Cat"}]
// }

// Get profile info
app.get('/api/profile', function homepage(req, res) {
  db.Profile.find(function(err, myProfile) {
    if (err) {
      return console.log('Get my profile error: ' + err);
    }
    res.json(myProfile[0]);
  });
});

///////////////////////////////////////////
//////Photographers-list Routes////////////
///////////////////////////////////////////


// Get all photgraphers in photographers-list
app.get('/api/photographers-list', function (req, res) {
  db.Photographer.find(function(err, photographer) {
    if (err) {
      return console.log('Get all photographers error: ' + err);
    }
    res.json(photographer);
  });
});

//Get a single photographer
app.get('/api/photographers-list/:id', function(req, res) {
  db.Photographer.findOne({_id: req.params.id}, function(err, photographer) {
    res.json(photographer);
  });
});

// create a new photographer in photographers-list
app.post('/api/photographers-list', function(req, res) {
  var photographer = new db.Photographer(req.body);
  photographer.save(function(err, newPhotographer) {
    res.json(newPhotographer);
  });
});

//Update a single photographer in photographers-list
app.put('/api/photographers-list/:id', function(req, res) {
  db.Photographer.findOne({_id: req.params.id}, function(err, photographer) {
    console.log("req body name", photographer.name)
    photographer.profileImageUrl = req.body.profileImageUrl;
    photographer.name = req.body.name;
    photographer.dateOfBirth = req.body.dateOfBirth;
    photographer.location = req.body.location;
    photographer.mediumType = req.body.mediumType;
    photographer.bio = req.body.bio;
    photographer.styleOfWorks = req.body.styleOfWorks;
    photographer.note = req.body.note;
    photographer.photographerImage = req.body.photographerImage;
    photographer.alive = req.body.alive;

    photographer.save(function(err, newPhotographer) {
    res.json(newPhotographer);
    });
  });
});



// Delete a single photographer in photographers-list
app.delete('/api/photographers-list/:id', function(req, res) {
  db.Photographer.findOneAndRemove({_id: req.params.id}, function(err, photographer) {
    res.json(photographer);
  });
});


///////////////////////
/////Photos Route//////
///////////////////////


// Get all photos in photographers-list
app.get('/api/photos-list', function (req, res) {
  db.Photo.find(function(err, photos) {
    if (err) {
      return console.log('Get all photos error: ' + err);
    }
    res.json(photos);
  });
});


//Get a single photo
app.get('/api/photos-list/:id', function(req, res) {
  db.Photo.findOne({_id: req.params.id}, function(err, photo) {
    res.json(photo);
  });
});

// create a new photo in photographers-list
app.post('/api/photos-list', function(req, res) {
  var photo = new db.Photo(req.body);
  photo.save(function(err, newPhoto) {
    res.json(newPhoto);
  });
});


//Update a single photo in photos-list
app.put('/api/photos-list/:id', function(req, res) {
  db.Photo.findOne({_id: req.params.id}, function(err, photo) {
    photo.imageUrl = req.body.imageUrl;
    photo.title = req.body.title;
    photo.datePublished = req.body.datePublished;
    photo.fStop = req.body.fStop;
    photo.shutterSpeed = req.body.shutterSpeed;
  });
  photo.save(function(err, newPhoto) {
  res.json(newPhoto);
  });
});


// Delete a single photo in photos-list
app.delete('/api/photos-list/:id', function(req, res) {
  db.Photo.findOneAndRemove({_id: req.params.id}, function(err, photos) {
    console.log('sever error ', err)
    res.json(photos);
  });
});



/*
* JSON API Endpoints
*/

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/yasuper8/express-personal-api/blob/master/README.md",
    baseUrl: "http://rocky-hollows-55860.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Display data about me"},
      {method: "GET", path: "/api/photographers-list", description: "Display all photographers in photographers-list"},
      {method: "GET", path: "/api/photographers-list/:id", description: "Display a single photographer in photographers-list"},
      {method: "POST", path: "/api/photographers-list", description: "Create a new photographer in photographers-list"},
      {method: "PUT", path: "/api/photographers-list/:id", description: "Update a single photographer in photographers-list"},
      {method: "DELETE", path: "/api/photographers-list/:id", description: "Delete a single photographer in photographers-list"},
      {method: "GET", path: "/api/photos-list", description: "Display all photos in photos-list"},
      {method: "GET", path: "/api/photos-list/:id", description: "Display a single photo in photos-list"},
      {method: "POST", path: "/api/photos-list", description: "Create a new photo in photos-list"},
      {method: "PUT", path: "/api/photos-list/:id", description: "Update a single photo in photos-list"},
      {method: "DELETE", path: "/api/photos-list/:id", description: "Delete a single photo in photos-list"}  // CHANGE ME
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
