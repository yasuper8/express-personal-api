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
    alive: Boolean,
    photos: [{ type: Schema.Types.ObjectId, ref: "Photo"}]
  });

  var Photographer = mongoose.model('Photographer', PhotographerSchema);
  module.exports = Photographer;
