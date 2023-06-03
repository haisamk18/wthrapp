import React from 'react'
import { fromatToLocaltime } from '../services/weatherservice'
import { iconUrlfromCode } from '../services/weatherservice'
import './current.css';

const Current = ({weather:{name,timezone,dt,country,details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like}}) => {
  return (
    <div className='currentcon'>
          
       <div className='currentname'>{name},{country}</div>
       <div className='currenttime'>{fromatToLocaltime(dt,timezone)}</div>


       <div className='detailcon'>
         <div className='weatherdetail'>{details}</div>
         <div className='detailconflex'>

           <div className='iconcon'>
             <img src={iconUrlfromCode(icon)}></img>
           </div>
           <div className='tempcon'>{temp.toFixed()}&deg;</div>
           <div className='restdetailscon'>
             <div>Feels Like : <span>{feels_like.toFixed()}&deg;</span></div>
             <div>Humidity: <span>{humidity}%</span></div>
             <div>Wind : <span>{speed} km/h</span></div>
           </div>
           </div>
        <div className='tempdetailcon'>
             <div>Rise: {" "} <span>{fromatToLocaltime(sunrise,timezone,"hh:mm a")}</span></div>
             <div>Set: {" "} <span>{fromatToLocaltime(sunset,timezone,"hh:mm a")}</span></div>
             <div>High: {" "} <span>{temp_max.toFixed()}&deg;</span></div>
             <div>Low: {" "} <span>{temp_min.toFixed()}&deg;</span></div>
        </div>


         
       </div>
      
    </div>
  )
}

export default Current

