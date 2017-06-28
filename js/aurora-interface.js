var Aurora = require('./../js/aurora.js').auroraModule;
var Location = require('./../js/latlong.js').latLongModule;

var displayLat = function(lat) {
  $('.output-lat').text("Your latitude is " + lat);
};
var displayLong = function(long) {
  $('.output-long').text("Your longitude is " + long);
};

var displayWeather = function(temp, cloud, rain) {
  $("#temp").text("Temperature: " + temp + " Celsius.");
  $("#cloud-cover").text("Cloud Cover: " + cloud + "%.");
  $("#rain").text("Rainfall: " + rain + " %.");
};

var displayStarStuff = function(sunrise, sunset, moonrise, moonset, moonphase) {
  $("#sunrise").text("Sunrise Time: " + sunrise + ".");
  $("#sunset").text("Sunset Time: " + sunset + ".");
  $("#moonrise").text("Moonrise Time: " + moonrise + ".");
  $("#moonset").text("Moonset Time: " + moonset + ".");
  $("#moonphase").text("Moon Phase: " + moonphase + ".");
};

var displayAurora = function(auroraLat, auroraLong, probability, color) {
  $("#aurora-lat").text("Latitude: " + auroraLat + ".");
  $("#aurora-long").text("Longitude: " + auroraLong + ".");
  $("#probability").text("Probability: " + probability + " %.");
  $("#color").text("Color: " + color + ".");
};

var displayLocation = function(closeLat, closeLong, closeProbability, closeColor, bestLat, bestLong, bestProbability, bestColor) {
  $("#close-lat").text("Latitude: " + closeLat + ".");
  $("#close-long").text("Longitude: " + closeLong + ".");
  $("#close-probability").text("Probability: " + closeProbability + " %.");
  $("#close-color").text("Color: " + closeColor + ".");
  $("#best-lat").text("Latitude: " + bestLat + ".");
  $("#best-long").text("Longitude: " + bestLong + ".");
  $("#best-probability").text("Probability: " + bestProbability + " %.");
  $("#best-color").text("Color: " + bestColor + ".");
};

$(document).ready(function() {
  $('#formId').submit(function(event) {
    event.preventDefault();
    var currentLocation = new Location($('#address').val(), $('#city').val(), $('#state').val());

    currentLocation.getLatLong(displayLat, displayLong, displayWeather, displayStarStuff, displayAurora, displayLocation);
  });
});
