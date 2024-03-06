const weatherForm = document.querySelector(".weather");
const input = document.querySelector("input");
const card = document.querySelector(".card");
const apiKey = "b2ffc45e94d56ec4be3e2217fcd978e5";
weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cityName = input.value;
  if (cityName) {
    try {
      const data = await weatherData(cityName);
      weatherInfo(data);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function weatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURL);
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  return await response.json();
}
function weatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    wind: { speed },
  } = data;
  card.textContent = "";
  card.style.display = "flex";
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("h2");
  const humDisplay = document.createElement("h2");
  const speedDisplay = document.createElement("h2");
  cityDisplay.innerHTML = `City - ${city}`;
  tempDisplay.innerHTML = `Temperature - ${temp}°C`;
  humDisplay.innerHTML = `Humidity - ${humidity}%`;
  speedDisplay.innerHTML = `Wind - ${speed} km/h`;
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humDisplay);
  card.appendChild(speedDisplay);
}
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
