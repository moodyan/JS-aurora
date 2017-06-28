var Location = require('./../js/latlong.js').latLongModule;

var displayLat = function(lat) {
  $('.output-lat').text("Your latitude is " + lat);
};
var displayLong = function(long) {
  $('.output-long').text("Your longitude is " + long);
};

// $(document).ready(function() {
//   $('#formId').submit(function(event) {
//     event.preventDefault();
//     var currentLocation = new Location($('#address').val(), $('#city').val(), $('#state').val());
//     currentLocation.getLatLong(displayLat, displayLong);
//   });
//   //DEAL WITH PROBLEMS

});
