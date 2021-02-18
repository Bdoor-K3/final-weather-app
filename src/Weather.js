import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";


export  default function Weather (props){
    const[weatherData, setWeatherData] = useState({ready:false});
    const[city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }
     
    function searchCity(){
    const apiKey="29a44231d6c7563fcc1740ef29d751ed";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }



    function handleSubmit(event){
        event.preventDefault();
        searchCity();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

if (weatherData.ready){
return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search city here" className="form-control" autoFocus="on" onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
        </div>
        </form>
        <WeatherInfo data={weatherData}/>
    </div>
      );
} else{
    searchCity();
    return "Searching...";
}
    
}