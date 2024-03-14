# realtime-weather
An npm package to get realtime weather

To install Package
npm i realtime-weather-forecast


syantax for use this package




import fetchWeather from 'realtime-weather';


const main = async (city) => {
 
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
};



