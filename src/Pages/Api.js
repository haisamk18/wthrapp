const APIKEY ="45ffd40709015a58175b210724c215d4";


export const weatherForecast =(lat,lon,Unit) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKEY}&units=${Unit}`
export const currentForecast =(city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`