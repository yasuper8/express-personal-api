var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PhotographerSchema = new Schema({
    profileImageUrl: String,
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


  // var PhotoSchema = new Schema({
  //   title: String,
  //   datePublished: String,
  //   description: String,
  //   fStop: Number,
  //   shutterSpeed: Number,
  //   photographer: {type: object.type.objectId, ref: 'Photographer'}
  // });




// var Photo = mongoose.model('Photo', PhotoSchema);
// module.exports = Photo;
