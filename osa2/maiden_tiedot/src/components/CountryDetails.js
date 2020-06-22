import React, { useEffect, useState } from 'react'
import axios from 'axios'



const CountryDetails = (props) => {
    const namesToShow = props.namesToShow
    const capital = namesToShow[0].capital
  
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: capital
    }
  
    const [weatherInfo, setWeatherInfo] = useState("")
  
  
    useEffect(() => {
      axios
        .get("http://api.weatherstack.com/current", { params })
        .then(response => {
          setWeatherInfo(response.data)
        })
    }, [])
  
    if (weatherInfo.current) {
      return (
        <div>
          <h1>{namesToShow[0].name}</h1>
          <p>Capital {namesToShow[0].capital}</p>
          <p>Population {namesToShow[0].population}</p>
  
          <h2>Languages</h2>
          <ul>
            {namesToShow[0].languages.map((l) =>
              <li key={l.name}>{l.name}</li>
            )}
          </ul>
          <p>
            <img src={namesToShow[0].flag} alt="maan lippu" width="300" height="auto"></img>
          </p>
          <p>Weather in {capital}: {weatherInfo.current.temperature} Celcius</p>
          <p><img src={weatherInfo.current.weather_icons} alt="säätilaa kuvaava kuva" width="100" height="auto"></img></p>
          <p>Wind: {weatherInfo.current.wind_speed} mph Direction {weatherInfo.current.wind_dir}</p>
        </div>
      )
    } return (null)
  }
  
  export default CountryDetails