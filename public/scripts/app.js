console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

//Search form
var $photographersSearch = $("#photographer-search");

var $name = $("#name");

var $result = $("#result");

// loading gif
var $loading = $('#loading');












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
