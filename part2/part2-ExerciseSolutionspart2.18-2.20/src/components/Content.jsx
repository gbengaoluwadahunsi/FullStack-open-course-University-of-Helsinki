import { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayInfo from './DisplayInfo';
import CarouselComponent  from './CarouselComponent';



const Content = () => {
  const [country, setCountry] = useState('canada');
  const [value, setValue] = useState('canada');
  const [weather, setWeather] = useState({

    location : {
      localtime: '',
    },
    current : {
      temp_c : '',
      condition: {
        icon : ""
      }
    },
   
  });
  const [info, setInfo] = useState({
    capital: [],
    area: null,
    flags: {
      png: '',
    },
    name: {
      common: '',
    },
    region: '',
    timezones: [],
    languages: {},
    coatOfArms:{
      png : ''
    }
  });

  useEffect(() => {
    console.log('effect run, country is now', country);

    // skip if country is not defined
    if (country) {
      console.log('fetching country info...');
      
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
        .then(countryResponse => {
          console.log(countryResponse.data);
          setInfo(countryResponse.data);

          // Extract the capital from the response
          const capital = countryResponse.data.capital;

          // Use the capital to fetch weather data
          return axios.get(`http://api.weatherapi.com/v1/current.json?key=72c7356ce4ce485ea84120905240601&q=${capital}&aqi=no`);
        })
        .then(weatherResponse => {
          console.log(weatherResponse.data);
          setWeather(weatherResponse.data);
        })
        .catch(error => {
          console.log('fail', error);
        });
    }
  }, [country]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCountry(value);
    setWeather(value);
  };

  return (
    <>        
      <form className='search-section' onSubmit={onSearch}>
        <label htmlFor="find">Find countries</label>
        <input type='text' id='find' value={value} onChange={handleChange}/>
        <button>search</button>
      </form> 

      <section className='carousel'>
        <h4>We offer information about countries and predicted weather data via light-speed APIs for every location on the planet. Forecast updated every minute. Additional forecasts: 24-hour, 16-hour, and 30-day climate forecasts.</h4>
        <CarouselComponent/>
      </section> 
      <DisplayInfo info={info}  weather = {weather}/>
    </>
  );
};

export default Content;
