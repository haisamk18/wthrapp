import axios from 'axios';
import React, { useState } from 'react';
import "../css/new.css";

function New() {
     const APIKEY = "45ffd40709015a58175b210724c215d4";
     const City= "Begusarai";
     //const [city,setCity] = useState("");
     const [lon,setLon]=useState("");
     const [lat,setLat]=useState("");
     const array =[];

    const Srch =() => {
      
      //console.log(Getdata())
      
     const Url =`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKEY}`
      const Url2 =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKEY}`
      

    

       

     
     

    
    }



  return (
    <div className='main'>
        <div className='left'>
          <input type="search" className='search'/>
          <button type='btn' className='btn' onClick={Srch}>Search</button>
          
          
         
          <div className='celcloud'>
           23
          </div>
          <hr className='lineone'/>
        </div>
        <div className='righttop'></div>
        <div className='rightbottom'></div>
    </div>

  )
}

export default New