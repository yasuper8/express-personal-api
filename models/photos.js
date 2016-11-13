var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  imageUrl: String,
  title: String,
  datePublished: String,
  description: String,
  fStop: Number,
  shutterSpeed: String,
  _creator: {type: Number, ref: 'Photographer'}
});




var Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;
