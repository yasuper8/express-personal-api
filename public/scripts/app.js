console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  //Search form
  var $photographersSearch = $("#photographer-search");

  var $name = $("#name");

  var $results = $("#results");

  //Photograpers list
  var $photographersList = $("#photographers-list");
  // loading gif
  var $loading = $('#loading');

  var $myProfile = $("#profileTarget");


  // compile handlebars template for my profile
  var source = $('#profile-template').html();
  template = Handlebars.compile(source);

  $.ajax({
      method: 'GET',
      url: '/api/profile',
      success: handleSuccessProfile,
      error: handleError
  });


  // helper function to render all posts to view
  // note: we empty and re-render the collection each time our post data changes
  function renderProfile () {
  // empty existing posts from view
  $myProfile.empty();

  //My profile info into the template function
  var myProfileInfo = {
    name: myProfile.name,
    githubLink: myProfile.githubLink,
    githubProfileImage: myProfile.githubProfileImage,
    personalSiteLink: myProfile.personalSiteLink,
    currentCity: myProfile.currentCity,
    pets: myProfile.pets
  }


  var myProfileHtml = template(myProfileInfo);
    // append my profile html to the view
    $myProfile.append(myProfileHtml);
  }

  function handleSuccessProfile(json) {
    myProfile = json;
    renderProfile();
  }

  function handleError(e) {
    console.log('uh oh');
    $('#profileTarget').text('Failed to load my profile, is the server working?');
  }
  //end my profile

////////////////////////////////////////
///////////GET All//////////////
////////////////////////

  // compile handlebars template for photgraphers
  var photographersSource = $('#photographers-template').html();
  templatePhotographers = Handlebars.compile(photographersSource);

  //Get all photogrphers in photographers-list
  $.ajax({
    method: 'GET',
    url: "api/photographers-list",
    success: handleSuccessAllPhotographers,
    error: handleError
  });

  function renderPhotographers() {
    for(var i = 0; i < photographersList.length; i++) {
      var photographersInfo = {
        name: photographersList[i].name,
        dateOfBirth: photographersList[i].dateOfBirth,
        location: photographersList[i].location,
        mediumType: photographersList[i].mediumType,
        bio: photographersList[i].bio,
        styleOfWorks: photographersList[i].styleOfWorks,
        note: photographersList[i].note,
        alive: photographersList[i].alive,
        _id: photographersList[i]._id
      }
      var photographersHtml = templatePhotographers(photographersInfo);

      // append html to the view
      $results.append(photographersHtml);
    }

  }

    function handleSuccessAllPhotographers(json) {
      photographersList = json;
      renderPhotographers();
    }

    function handleError(e) {
      console.log('uh oh');
      $('#results').text('Failed to load photographers in photographers-list, is the server working?');
    }



//////////////////////////////
//////POST Create one/////
////////////////////////








///////////////////////////////
///////DELETE/////////
/////////////////////////

  // $photographersList.on('click','.delateBtn', function(event) {
  //   event.preventDeafult();
  //   console.log("deleteBtn clicked!");
  //
  //   $.ajax({
  //     method: 'DELETE',
  //     url: "api/photographers-list/" + $(this).attr('data-id'),
  //     success: handleDeleteAPhotographer,
  //     error: handleError
  //   });
  //
  // });
  //
  //
  // function handleDeleteAPhotographer(json) {
  //   var deleteThisPhotographer = json;
  //   var photographerId = deleteThisPhotographer._id;
  //
  //   for (var i = 0; i < photographersList.length; i++) {
  //     if (photographersList[i]._id === photographerId) {
  //       photographersList.splice(i, 1);
  //     }
  //   }
  //   renderPhotographers();
  // }
  //
  //
  //
  // function handleError(e) {
  //   console.log('uh oh');
  //   $('#results').text('Failed to delete a photographer from photographers-list, is the server working?');
  // }
  //





/////////////////////////////////////////
//////////GET SEARCH//////////
//////////////////////////
// On form submit
// $photographersSearch.on('submit', function(event) {
//   event.preventDeafult();
//
//   //clears search box
//   $result.empty();
//
//   var searchName = $name.val();
//   if (searchName !== '') {
//       // $loading.show();
//
//       $.ajax({
//         method: 'GET',
//         url: "api/photographers-list/:id",
//         data: searchName.serialize(),
//         success: handlePhotographersDataSearch,
//         error: handleError
//       });
//     } else {
//       // remind the user to enter a keyword
//       // one way is a "quick and ugly" alert
//       alert("Enter a name keyword to search!");
//     }
//
//     // reset photographers search form
//     $photographersSearch.reset();
//
// });
//
// function handlePhotographersDataSearch(photographersResult) {
//   console.log("result response from photographers list", photographersResult);
//
//
//   var photographerFound = photographsResult.name;
//
//   if(photographsResult.length === 0) {
//       alert("There is no match with the name you input");
//     } else {
//
//
//       // console.log("trackResults :" trackResults.album.images[0].url)
//
//       // hide loading gif
//       // $loading.hide();
//
//       var source = $("#photographers-template").html();
//       var template = Handlebars.compile(source);
//
//
//       for(var i = 0; i < photographersResult.length; i++) {
//         var PhotographersInfo = {
//           name: photographersResult.name,
//           dateOfBirth: photographersResult.dateOfBirth,
//           location: photographersResult.location,
//           mediumType: photographersResult.mediumType,
//           bio: photographersResult.bio,
//           styleOfWorks: photographersResult.styleOfWorks,
//           note: photographersResult.note,
//           alive: photographersResult.alive
//         }
//         var tempHtml = template(spotifyTemplate)
//         $('#results').append(tempHtml);
//       }
//     }
//
//   }





});// end ready!
