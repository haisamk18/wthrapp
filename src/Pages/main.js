import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/main.css";


export function Main() {

    const [city,setCity]=useState("Begusarai");
    const [temp,setTemp]=useState("");
    const [coordslat,setCoordslat]=useState("");
    const [coordslong,setCoordslong]=useState("");

    const Apicall =() =>{
        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ffd40709015a58175b210724c215d4`)
    .then(res => {
      console.log(res);
      console.log(res.data.main.temp);
      setTemp(res.data.main.temp);
      
    }).catch((err)=> {
        alert(err);
    })

    }
     useEffect(() => {
       first
     
       return () => {
         second
       }
     }, [third])
     
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCoordslat(position.coords.latitude);
        setCoordslong(position.coords.longitude);

      });

      const [mylocation,setMylocation] =useState("");
     
     const Coordcall =()=> {
         axios.get(`https://api.bigdatacloud.net/data/reverse-geocode?latitude=${coordslat}&longitude=${coordslong}&localityLanguage=en&key=bdc_76cbebcce1be43cf98215dbf3e12e1dd`)
         .then(res => {
             console.log(res);
             setMylocation(res.data.city);
         })
         .catch((err) => {
             console.log(err)
         })
     }

    

   
    return(
        <div>
            

            

            <h1>Search Here </h1>

           <input type="text" onChange={(e)=> setCity(e.target.value)} />
           <button onClick={Apicall}>Search</button>
           <button onClick={Coordcall}>SLocation</button>


           <div>
               <h3>Temperature : {Math.round(temp-273)} °C</h3>
           </div>

           <div className="mylocationborder">
               <p>Your Location : {mylocation}</p>
           </div>
         

           
            


        </div>
    )
}