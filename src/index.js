import './styles/styles.css'; //
// https://api.weatherapi.com/v1/current.json?key=f10914a3d1df4c9e8bb192920231706&q=london

// const apiKey = 'f10914a3d1df4c9e8bb192920231706';
// let locationName = 'London';
// let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;

// закрепить все данные за переменными
// указать все данные на странице
// дать возможность менять город
// дать возможность менять температуру
// дать возможность смотреть дни и часы

const apiKey = 'f10914a3d1df4c9e8bb192920231706';
let locationName = 'Denver';
let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;

async function getWeatherData() {
  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    return { data };
  } catch (err) {
    console.error(err);
    throw new Error('getData error');
  }
}

function populateDom(weatherData) {
  const weatherType = document.querySelector('.weather-type');
  const town = document.querySelector('.town');
  const date = document.querySelector('.date');
  const temp = document.querySelector('.temp');
  const tempToggle = document.querySelector('.temp-toggle');

  weatherType.textContent = weatherData.data.current.condition.text;
  town.textContent = weatherData.data.location.name;
  date.textContent = weatherData.data.location.localtime;
  temp.textContent = `${weatherData.data.current.temp_f} °F`;
  tempToggle.textContent = `Display °C`;

  tempToggle.addEventListener('click', () =>
    toggleTempScale(tempToggle, temp, weatherData)
  );
}

function toggleTempScale(tempToggle, temp, weatherData) {
  if (tempToggle.textContent === `Display °C`) {
    temp.textContent = `${weatherData.data.current.temp_c} °C`;
    tempToggle.textContent = `Display °F`;
  } else {
    temp.textContent = `${weatherData.data.current.temp_f} °F`;
    tempToggle.textContent = `Display °C`;
  }
}

async function changeTown(searchField) {
  locationName = searchField.value;
  apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
  const weatherData = await getWeatherData();
  populateDom(weatherData);
}

document.addEventListener('DOMContentLoaded', async () => {
  const searchField = document.querySelector('.search-field');
  const weatherData = await getWeatherData();
  populateDom(weatherData);

  searchField.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      changeTown(searchField);
    }
  });
});

// const getClouds = async () => {
//   const data = await getWeatherData();
//   console.log(data.current.cloud);
// };

// getClouds();
