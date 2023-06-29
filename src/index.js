import './styles/styles.css'; //
// https://api.weatherapi.com/v1/current.json?key=f10914a3d1df4c9e8bb192920231706&q=london

const apiKey = 'f10914a3d1df4c9e8bb192920231706';
const location = 'London';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

// class WeatherApp {
//   constructor() {
//     this.apiKey = 'f10914a3d1df4c9e8bb192920231706';
//     this.location = 'Denver';
//     this.apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`;
//   }

//   async getWeatherData() {
//     try {
//       const response = await fetch(this.apiUrl, { mode: 'cors' });
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (err) {
//       console.error(err);
//       throw new Error('getData error');
//     }
//   }
// }

// закрепить все данные за переменными
// указать все данные на странице
// дать возможность менять город
// дать возможность менять температуру
// дать возможность смотреть дни и часы

// async function getWeatherData() {
//   try {
//     const response = await fetch(apiUrl, { mode: 'cors' });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//     throw new Error('getData error');
//   }
// }

// const getClouds = async () => {
//   const data = await getWeatherData();
//   console.log(data.current.cloud);
// };

// getClouds();
