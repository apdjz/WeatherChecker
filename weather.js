let min, max, current, condition, windSpeed, change = 91387;

$(document).ready(function () {
  $("#zip").change(function () {
    change = $(this).val();
  });
});

function zip() {
  $.ajax({
    dataType: 'json',
    url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + change + ',us&APPID=yourown',
    success: function (data) {
      condition = data.weather[0].description;
      current = (data.main.temp * 9 / 5) - 459.67;
      max = (data.main.temp_max * 9 / 5) - 459.67;
      min = (data.main.temp_min * 9 / 5) - 459.67;
      windSpeed = data.wind.speed * 2.236936;

      document.getElementById('currentWeather').innerHTML = current.toFixed(2);
      document.getElementById('maxWeather').innerHTML = max.toFixed(2);
      document.getElementById('minWeather').innerHTML = min.toFixed(2);
      document.getElementById('windSpeed').innerHTML = windSpeed.toFixed(2);
      document.getElementById('condition').innerHTML = condition;
    }
  });
}
