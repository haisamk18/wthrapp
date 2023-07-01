import React from 'react'
import { fromatToLocaltime } from '../services/weatherservice'
import { iconUrlfromCode } from '../services/weatherservice'
import './hourly.scss'

const Hourly = ({items}) => {
  return (
    <div className='hourlycon'>
        <div className='hourlytitle'>Hourly Forecast</div>
        <div className='hourlywthrcon'>
          {items.map((item,i)=> {
            return (<div className='hourlyitem' key={i}>
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