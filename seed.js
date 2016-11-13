// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
//
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var new_profile = {
  name: "Yasuyoshi Sakamoto",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/18222976?v=3&s=460",
  githubLink: "https://github.com/yasuper8",
  personalSiteLink: "https://github.com/yasuper8/yasuper8.github.io",
  currentCity: "San Francisco, California",
  pets: [{name: "Moe", type: "Cat"}, {name: "Max", type: "Cat"}]
}

var photographers_list = [
  {
    profileImageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ansel_Adams_and_camera.jpg",
    name: "Ansel Adams",
    dateOfBirth: "February 20, 1902",
    location: "San Francisco",
    mediumType: "large format film",
    bio: "Ansel Adams, photographer and environmentalist, was born in San Francisco, California, the son of Charles Hitchcock Adams, a businessman, and Olive Bray. The grandson of a wealthy timber baron, Adams grew up in a house set amid the sand dunes of the Golden Gate.",
    styleOfWorks: "Natural Light Photography",
    note: "http://anseladams.com/about-ansel-adams/ansel-adams-biography/",
    alive: false
  },
  {
    profileImageUrl: "http://www.conversations.org/pics/story/449/large.jpg",
    name: "Linda Connor",
    dateOfBirth: "November 18, 1944",
    location: "San Francisco",
    mediumType: "large format film",
    bio: "Linda Connor has lead a creative life devoted to photography. With her large format camera, she has traveled in Africa, Southeast Asia, Nepal, India, Turkey, Mexico, Tibet, the American Southwest, and Europe exploring sites that evoke mystery and spirit. She is known for her luminous and iconic photographs and fascination with culturally sacred sites and landscapes.",
    styleOfWorks: "Sacred Photography",
    note: "http://www.josephbellows.com/artists/linda-connor/bio/",
    alive: true
  },
  {
    profileImageUrl: "http://speakers.ok.ubc.ca/__shared/assets/burtynsky-20047935.jpg",
    name: "Edward Burtynsky",
    dateOfBirth: "1955",
    location: "St. Catharines, Ontario",
    favoriteEquipment: "large format film",
    bio: "Edward Burtynsky is known as one of Canada's most respected photographers. His remarkable photographic depictions of global industrial landscapes are included in the collections of over sixty major museums around the world, including the National Gallery of Canada, the Museum of Modern Art, the Guggenheim Museum in New York, the Reina Sofia Museum in Madrid, and the Los Angeles County Museum of Art in California.",
    styleOfWorks: "Natural Light Photography",
    note: "http://www.edwardburtynsky.com/site_contents/About/aboutBio.html",
    alive: true
  },
  {
    profileImageUrl: "https://avatars2.githubusercontent.com/u/18222976?v=3&s=460",
    name: "Yasuyoshi Sakamoto",
    dateOfBirth: "2/3/1982",
    location: "Tokyo Japan",
    favoriteEquipment: "large format film & Digital photography",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    styleOfWorks: "Natural Light Photography",
    note: "http://yasuphotography.com",
    alive: true
  }
]



var new_photos = [
  {
    imageUrl: "http://i.imgur.com/jIF205q.jpg",
    title: "Untitled",
    datePublished: " 2012",
    description: "Angele Island",
    fStop: 8,
    shutterSpeed: "2h"
  },
  {
    imageUrl: "http://i.imgur.com/DF3gMcI.jpg",
    title: "Untitled",
    datePublished: "2011",
    description: "San Francisco",
    fStop: 11,
    shutterSpeed: "2h"
  },
  {
    imageUrl: "http://i.imgur.com/FsQioQX.jpg",
    title: "Untitled",
    datePublished: "2016",
    description: "India",
    fStop: 8,
    shutterSpeed: "1/60"
  }
]


db.Photo.remove({}, function(err, photo) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed my photos');
    db.Photo.create(new_photos, function(err, photo) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + photo.length + ' photos');
      process.exit();
    });
  }
});



db.Profile.remove({}, function(err, myProfile) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed my profile');
    db.Profile.create(new_profile, function(err, myProfile) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + profile.length + ' profile');
      process.exit();
    });
  }
});

db.Photographer.remove({}, function(err, photographers) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed all photographers');
    db.Photographer.create(photographers_list, function(err, photographers) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + photographers.length + ' photographers');
      process.exit();
    });
  }
});
