import config from "./config.js";
const home = {
  lat: 32.04514,
  lon: 34.8726,
};

const appid = config.apiKey;
console.log(appid);

const jsonContainerEl = document.querySelector(".json-container");
const homeWeatherContainerEl = document.querySelector(
  ".home-weather-json-container"
);

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${appid}`
)
  .then((response) => response.json())
  .then((data) => {
    jsonContainerEl.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${home.lat}&lon=${home.lon}&units=metric&appid=${appid}`
)
  .then((response) => response.json())
  .then((data) => {
    homeWeatherContainerEl.innerHTML = `<pre>${JSON.stringify(
      data,
      null,
      2
    )}</pre>`;
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
