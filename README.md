# realtime-weather
An npm package to get realtime weather
import fetchWeather from 'realtime-weather';
// const { fetchWeather } = pkg;

const main = async (city) => {
 
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
};

main('Hisar');

