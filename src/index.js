import './styles/styles.css'; //
import { getWeatherData, changeTown } from './weather.js';
import { populateDom, setIcon } from './dom.js';

document.addEventListener('DOMContentLoaded', async () => {
  const searchField = document.querySelector('.search-field');
  const searchIcon = document.querySelector('.search__span');
  const weatherData = await getWeatherData();
  populateDom(weatherData);

  searchField.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      changeTown(searchField);
    }
  });

  searchIcon.addEventListener('click', () => {
    changeTown(searchField);
  });
});
