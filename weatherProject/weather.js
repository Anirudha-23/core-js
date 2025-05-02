async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '464e4e14bbe7722006e9a1e1223cd816';
    const url = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
  
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = <p class="text-sm text-gray-500">Fetching weather...</p>;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        const icon = data.weather[0].icon;
        const weatherHTML = `
          <div class="flex flex-col items-center">
            <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${data.weather[0].description}">
            <h2 class="text-2xl font-semibold">${data.name}</h2>
            <p class="text-xl">${data.main.temp}°C</p>
            <p class="capitalize text-gray-600">${data.weather[0].description}</p>
          </div>
        `;
        resultDiv.innerHTML = weatherHTML;
      } else {
        resultDiv.innerHTML = <p class="text-red-500">City not found!</p>;
      }
    } catch (error) {
      resultDiv.innerHTML = <p class="text-red-500">Error fetching data.</p>;
    }
  }