# realtime-weather
An npm package to get realtime weather
npm i realtime-weather


syantax for use this package




import fetchWeather from 'realtime-weather';


const main = async (city) => {
 
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
};

main('Hisar');

