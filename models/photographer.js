var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PhotographerSchema = new Schema({
    name: String,
    dateOfBirth: String,
    location: String,
    mediumType: String,
    bio: String,
    styleOfWorks: String,
    note: String,
    photographerImage: String,
    alive: Boolean
  });

  var Photographer = mongoose.model('Photographer', PhotographerSchema);
  module.exports = Photographer;

  //
  // var PhotoSchema = new Schema({
  //   title: String,
  //   datePublished: String,
  //   description: String,
  //   fStop: Number,
  //   ShutterSpeed: Number,
  //   photographer: {type: object.type.objectId, ref: 'Photographer'}
  // });

//   var ProfileSchema = new Schema({
//   	name: String,
//   	githubLink: String,
//   	githubProfileImage: String,
//   	personalSiteLink: String,
//   	currentCity: String,
//   	pets: Array
//   });
//
// var Profile = mongoose.model('Profile', ProfileSchema);
// module.exports = Profile;



// var Photo = mongoose.model('Photo', PhotoSchema);
// module.exports = Photo;
