var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var PhotographerSchema = new Schema({
    name: String,
    dateOfBirth: String,
    location: String,
    favoriteEquipment: String,
    bio: String,
    styleOfWorks: String,
    note: String,
    photographerImage: String,
    alive: Boolean
  });

  var PhotoSchema = new Schema({
    title: String,
    datePublished: String,
    description: String,
    fStop: Number,
    ShutterSpeed: Number,
    photographer: {type: object.type.objectId, ref: 'Photographer'}
  });

  var Photographer = mongoose.model('Photographer', hotographerSchema);
module.exports = Photographer;


var Photo = mongoose.model('Photo', PhotoSchema);
