import React from 'react'
import { fromatToLocaltime } from '../services/weatherservice'
import { iconUrlfromCode } from '../services/weatherservice'

const Hourly = ({items}) => {
  return (
    <div>
        <div>Hourly Forecast</div>
        <div>
          {items.map((item,i)=> {
            return (<div key={i}>
               <div>{item.title}</div>
               <div><img src={iconUrlfromCode(item.icon)}></img></div>
               <div>{item.temp.toFixed()} &deg;</div>

            </div>)
          })}
        </div>
    </div>
  )
}

export default Hourly