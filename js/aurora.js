Aurora = function(lat, long) {
  this.lat = lat;
  this.long = long;
};

Aurora.prototype.getAurora = function(displayWeather, displayStarStuff, displayAurora, displayLocation) {
  $.get('http://api.auroras.live/v1/?type=all&lat=' + this.lat + '&long=' + this.long + '&forecast=false&threeday=false').then(function(response) {
    console.log("aurora backend " + response.weather.moonphase);
    displayWeather(response.weather.temperature, response.weather.cloud, response.weather.rain);
    displayStarStuff(response.weather.sunrise, response.weather.sunset, response.weather.moonrise, response.weather.moonset, response.weather.moonphase);
    displayAurora(response.probability.calculated.lat, response.probability.calculated.long, response.probability.calculated.value, response.probability.calculated.colour);
    displayLocation(response.probability.lat, response.probability.long, response.probability.value, response.probability.colour, response.probability.highest.lat, response.probability.highest.long, response.probability.highest.value, response.probability.highest.colour);
  });
};

exports.auroraModule = Aurora;
