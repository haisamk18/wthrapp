import React, { useState ,useEffect} from 'react'
import Current from './comp/Current'
import Weekly from './comp/Weekly'
import Hourly from './comp/Hourly'
import axios from 'axios'
import getFomrattedWeatherData from './services/weatherservice'
import {FcSearch} from 'react-icons/fc';
import {GoLocation} from 'react-icons/go'
import './App.css';


const App = () => {
  const [city,setCity]=useState('')

  const [unitselected,setUnitselected]=useState(true)

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
    <div className='appp'>

      <div className='header'>
          <div className='searchbox'>
            <input className='input' type='text' value={city} onChange={(e)=> setCity(e.currentTarget.value)}/>
            <button onClick={Search}><FcSearch/></button>
            <button onClick={CurrentLocation}><GoLocation/></button>
          </div>
          

          <div className='units'>
              <button onClick={(e)=> setUnits('metric')}>&deg;C</button>
              <button onClick={(e)=> setUnits('imperial')}>&deg;F</button>
          </div>
      </div>
     
      

     
     

     {weather &&
      <>
      <div className='container'>
      <div className='leftside'><Current weather={weather} /></div>

      <div className='rightside'>
      <Hourly items={weather.hourly} />
      <Weekly items={weather.daily}/>
      </div>
      </div>
      
      
      </>
      
      
      }
     
      
      
     

    </div>
  )
}

export default App