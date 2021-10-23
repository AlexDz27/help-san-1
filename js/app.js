const API_KEY = '3893a57da0a56f41447ec4e4a0d95fa7';

fetch('https://api.openweathermap.org/data/2.5/weather?q=Kobrin&units=metric&appid=' + API_KEY)
.then(response => response.json())
.then((response) => {
  console.log(response)

  /* Get data from server response */
  const temperature = response.main.temp;
  const temperatureFeelsLike = response.main.feels_like;
  const temperatureIcon = response.weather[0].icon;

  /* Rounding temperatures values */
  const temperatureRendered = Math.round(temperature);
  const temperatureFeelsLikeRendered = Math.round(temperatureFeelsLike);

  /* Inserting data into HTML */
  const temperatureContainer = document.querySelector('#temperature');
  temperatureContainer.innerText = temperatureRendered;

  const temperatureFeelsLikeContainer = document.querySelector('#feelsLikeTemperature');
  temperatureFeelsLikeContainer.innerText = temperatureFeelsLikeRendered;

  const temperatureIconContainer = document.querySelector('#temperatureIcon');
  temperatureIconContainer.src = `http://openweathermap.org/img/wn/${temperatureIcon}@2x.png`;
});