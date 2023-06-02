import React, { useState ,useEffect} from 'react'
import Current from './comp/Current'
import Weekly from './comp/Weekly'
import Hourly from './comp/Hourly'
import axios from 'axios'
import getFomrattedWeatherData from './services/weatherservice'


const App = () => {
  const [city,setCity]=useState('')

  const [query,setQuery]=useState({q:'Aligarh'});
  const [units,setUnits]=useState('metric');
  const [weather,setWeather]=useState(null);

  const Search =(e) => {
    e.preventDefault();
    if (city !== '') {
      setQuery({q:city})
    }

  }

  const CurrentLocation = ()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=> {
        let lat=pos.coords.latitude;
        let lon=pos.coords.longitude;

        setQuery({lat,lon});
      })
    }
  }
 

  useEffect(() => {
    const fetchWeather =async ()=> {
      await getFomrattedWeatherData( {...query,units})
      .then((data)=> {
        setWeather(data)
        
        console.log(weather)
      })
    }
  
    fetchWeather();
  
    
  }, [query,units])
  

  
  


  
  


  return (
    <div>
     
      <input type='text' value={city} onChange={(e)=> setCity(e.currentTarget.value)}/>
      <button onClick={Search}>Search</button>

      UNits 
      <button onClick={(e)=> setUnits('metric')}>&deg;C</button>
      <button onClick={(e)=> setUnits('imperial')}>&deg;F</button>

      Get Current Location weather
      <button onClick={CurrentLocation}>Current location</button>

     {weather &&
      <>
      <Current weather={weather} />
      <Hourly items={weather.hourly} />
      <Weekly items={weather.daily}/>
      
      </>
      
      
      }
     
      
      
     

    </div>
  )
}

export default App