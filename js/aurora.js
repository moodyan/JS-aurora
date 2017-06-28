Aurora = function(lat, long) {
  this.lat = lat;
  this.long = long;
};

Aurora.prototype.getAurora = function(displayWeather, displayStarStuff, displayAurora, displayLocation) {
  $.get('http://api.auroras.live/v1/?type=all&lat=' + this.lat + '&long=' + this.long + '&forecast=false&threeday=false').then(function(response) {
    displayWeather();
    displayStarStuff();
    displayAurora();
    displayLocation();
  });
};

exports.auroraModule = Aurora;
