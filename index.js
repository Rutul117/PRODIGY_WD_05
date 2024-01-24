function getWeather() {
  const locationInput = document.getElementById('location');
  const location = locationInput.value;

  if (!location) {
    alert('Please enter a location.');
    return;
  }

  const apiKey = '73e1a188f95aceb1b8c037fd73141464'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('Weather Data:', data); // Log the retrieved data
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function displayWeather(data) {
  const resultDiv = document.getElementById('result');

  if (data.cod === '404') {
    resultDiv.innerHTML = 'Location not found. Please enter a valid city name.';
    return;
  }

  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const city = data.name;
  const country = data.sys.country;

  const weatherInfo = `Current weather in ${city}, ${country}: ${temperature}°C, ${description}.`;
  resultDiv.innerHTML = weatherInfo;
}
