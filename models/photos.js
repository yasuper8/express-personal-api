var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  imageUrl: String,
  title: String,
  photographerName: String,
  datePublished: String,
  description: String,
  fStop: String,
  shutterSpeed: String,
  _creator: {type: Number, ref: 'Photographer'}
});




var Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;
