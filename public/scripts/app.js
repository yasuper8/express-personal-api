console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code



//Search form
var $photographersSearch = $("#photographer-search");

var $name = $("#name");

var $result = $("#result");

// loading gif
var $loading = $('#loading');

var $myProfile = $("#profileTarget");


// compile handlebars template
var source = $('#profile-template').html();
template = Handlebars.compile(source);

$.ajax({
    method: 'GET',
    url: '/api/profile',
    success: handleSuccess,
    error: handleError
  });


  // helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $myProfile.empty();

  // pass `allBooks` into the template function
  var myProfileHtml = template({ name: myProfile.name,
                                 githubLink: myProfile.githubLink,
                                 githubProfileImage: myProfile.githubProfileImage,
                                 personalSiteLink: myProfile.personalSiteLink,
                                 currentCity: myProfile.currentCity,
                                 pets: myProfile.pets
                               });

  // append html to the view
  $myProfile.append(myProfileHtml);
}

  function handleSuccess(json) {
    myProfile = json;
    render();
  }

  function handleError(e) {
  console.log('uh oh');
  $('#profileTarget').text('Failed to load my profile, is the server working?');
}



$photographersSearch.on('submit', function(event) {
  event.preventDeafult();

  //clears search box
  $result.empty();

  var searchName = $name.val();
  if (searchName !== '') {
      $loading.show();

      $.ajax({
        method: 'GET',
        url: "api/photographers-list/:name",
        data: searchName.serialize(),
        success: handlePhotographersData // see this function defined below
      });
    } else {
      // remind the user to enter a keyword
      // one way is a "quick and ugly" alert
      alert("Enter a name keyword to search!");
    }

    // reset the form
    $spotifySearch[0].reset();

});

function handlePhotographersData(photographsResult) {
  console.log("result response from photographers list", photographsResult);


  var photographerFound = photographsResult.name;

  if(photographsResult.length === 0) {
      alert("There is no match with the name you input");
    } else {


      // console.log("trackResults :" trackResults.album.images[0].url)

      // hide loading gif
      $loading.hide();

      var source = $("#photographers-template").html();
      var template = Handlebars.compile(source);

      //
      // for(var i = 0; i < photographsResult.length; i++) {
      //   var spotifyTemplate = {
      //     albumUrl: trackResults[i].album.images[0].url,
      //     songTitle: trackResults[i].album.name,
      //     artistName: trackResults[i].artists[0].name,
      //     previewUrl: trackResults[i].preview_url
      //   }
      //   var tempHtml = template(spotifyTemplate)
      //   $('#results').append(tempHtml);
      // }
    }

}





});// end ready!
