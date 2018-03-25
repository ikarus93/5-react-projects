import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

const icons = {
  rain: "https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png",
  cloudy: "https://cdn2.iconfinder.com/data/icons/weather-34/512/Cloud_1-512.png",
  clear: "https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunAbstract.png",
  snow: "https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-512.png",
  wind: "https://cdn4.iconfinder.com/data/icons/weather-conditions/512/cloud_wind-512.png"
}


ReactDOM.render((<App icons={icons}/>), document.getElementById("container"));


