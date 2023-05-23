import React from 'react'
import Current from './comp/Current'
import Weekly from './comp/Weekly'
import Hourly from './comp/Hourly'
import axios from 'axios'

const App = () => {
  


  const Get= ()=> {
    const date = new Date(); 

   let day= date.getDate(); 
   let month=date.getMonth();
   let year=date.getFullYear();
   let hour=date.getHours()

   let datemod= year+'-'+month+'-'+day+':'+hour;
   let dateftreoneday=year+'-'+month+'-'+(day+1)+':'+hour;

    console.log(day); 

    axios.get(`https://api.weatherbit.io/v2.0/history/hourly?city=Patna&start_date=${datemod}&end_date=${dateftreoneday}&tz=local&key=0896747880bb4543a730d565fcacb9a0`)
    .then (res=> console.log(res))
    .catch (err=> console.log(err))
  }



  return (
    <div>
      <button onClick={Get}>Get</button>
      <Current/>
      <Weekly/>
      <Hourly/>


    </div>
  )
}

export default App