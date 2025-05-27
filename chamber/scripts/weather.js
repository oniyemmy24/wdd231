// === Footer Dates ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

const weatherContainer = document.querySelector("#weather");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-desc");
const forecastContainer = document.querySelector("#forecast");

const apiKey = "cef22ee9e11119011eb282eac91d4ad5"; 
const lat = "7.6100"; 
const lon = "4.7102"; 
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=24&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Weather error:", error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Forecast error:", error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

function displayForecast(data) {
  forecastContainer.innerHTML = "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < data.list.length; i += 8) {
    const forecast = data.list[i];
    const date = new Date(forecast.dt_txt);
    const temp = forecast.main.temp.toFixed(1);
    const icon = forecast.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const desc = forecast.weather[0].description;

    const card = document.createElement("div");
    card.classList.add("forecast-card");
    card.innerHTML = `
      <h4>${days[date.getDay()]}</h4>
      <img src="${iconURL}" alt="${desc}">
      <p>${temp}°C</p>
    `;
    forecastContainer.appendChild(card);
  }
}

fetchWeather();
fetchForecast();
