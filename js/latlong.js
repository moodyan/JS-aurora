var googleApiKey = require('./../.env').googleApiKey;
var Aurora = require('./../js/aurora.js').auroraModule;

Location = function(street, city, state){
  this.street = street + ", ";
  this.city = city + ", ";
  this.state = state;
  this.latitude = null;
  this.longitude = null;
};

Location.prototype.getLatLong = function(displayLat, displayLong, displayWeather, displayStarStuff, displayAurora, displayLocation) {
  var street = this.street.replace(/ /, '+');
  var city = this.city.replace(/ /, '+');
  var state = this.state.replace(/ /, '+');

  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + street + city + state + '&key=' + googleApiKey).then(function(response) {
    displayLat(response.results[0].geometry.location.lat);
    displayLong(response.results[0].geometry.location.lng);
    this.latitude = response.results[0].geometry.location.lat;
    this.longitude = response.results[0].geometry.location.lng;
    console.log("latlong backend " + this.latitude);

    var newAurora = new Aurora(this.latitude, this.longitude);
    newAurora.getAurora(displayWeather, displayStarStuff, displayAurora, displayLocation);
  });
};

exports.latLongModule = Location;
