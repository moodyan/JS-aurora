var Aurora = require('./../js/aurora.js').auroraModule;

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

var displayLocation = function(1000Lat, 1000Long, 1000Probability, 1000Color, bestLat, bestLong, bestProbability, bestColor) {
  $("#1000-lat").text("Latitude: " + 1000Lat + ".");
  $("#1000-long").text("Longitude: " + 1000Long + ".");
  $("#1000-probability").text("Probability: " + 1000Probability + " %.");
  $("#1000-color").text("Color: " + 1000Color + ".");
  $("#best-lat").text("Latitude: " + bestLat + ".");
  $("#best-long").text("Longitude: " + bestLong + ".");
  $("#best-probability").text("Probability: " + bestProbability + " %.");
  $("#best-color").text("Color: " + bestColor + ".");
};

$(document).ready(function() {
  $('#formId').submit(function(event) {
    event.preventDefault();
    var currentLocation = new Location($('#address').val(), $('#city').val(), $('#state').val());
    
    var aurora = new Aurora(
    currentLocation.getLatLong(displayLat, displayLong);
  })
