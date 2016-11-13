var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.Photographer = require("./photographer.js");
module.exports.Profile = require("./profile.js");
module.exports.Photo = require("./photos.js");
