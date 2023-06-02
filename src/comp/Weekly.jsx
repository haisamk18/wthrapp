import React from 'react'
import { iconUrlfromCode } from '../services/weatherservice'

const Weekly = ({items}) => {
  return (
    <div>
      <div>Daily Forecast</div>
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

export default Weekly