import axios from 'axios';

 const fetchWeather = async (city) => {
    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: { city: city },
      headers: {
        'X-RapidAPI-Key': '8017f40813mshce40402472a933dp1f114cjsn6d484aa3516b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const weather = {
        city: city, // Adding the city name to the weather object
        cloud_pct: response.data.cloud_pct,
        temp: response.data.temp,
        feels_like: response.data.feels_like,
        humidity: response.data.humidity,
        min_temp: response.data.min_temp,
        max_temp: response.data.max_temp,
        wind_speed: response.data.wind_speed,
        wind_degrees: response.data.wind_degrees,
        sunrise: response.data.sunrise,
        sunset: response.data.sunset
      };
      return weather;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // rethrow the error to be handled by the caller
    }
  };
  

  export default fetchWeather;