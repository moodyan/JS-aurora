var googleApiKey = require('./../.env').googleApiKey;

Location = function(street, city, state){
  this.street = street + ", ";
  this.city = city + ", ";
  this.state = state;
  this.latitude = null;
  this.longitude = null;
};

Location.prototype.getLatLong = function(displayLat, displayLong) {
  var street = this.street.replace(/ /, '+');
  var city = this.city.replace(/ /, '+');
  var state = this.state.replace(/ /, '+');

  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + street + city + state + '&key=' + googleApiKey).then(function(response) {
    displayLat(response.results[0].geometry.location.lat);
    displayLong(response.results[0].geometry.location.lng);
  })
};

exports.latLongModule = Location;
