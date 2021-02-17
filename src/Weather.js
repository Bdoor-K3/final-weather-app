import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";


export  default function Weather (props){
    const[weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }
    
if (weatherData.ready){
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search city here" className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
        </div>
        </form>
        
        <h1>{weatherData.city}</h1>
        <ul>
            <li> <FormattedDate date={weatherData.date}/> </li>
            <li className="text-capitalize"> {weatherData.description} </li>
        </ul>
        <div className="row mt-3" >
            <div className="col-6">
                <div className="clearfix">
                <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                </div>
                </div>
            <div className="col-6">
            <ul>
                <li><span className="font-weight-bold">Precipitation: %</span></li>
                <li><span className="font-weight-bold">Humidity:</span> {weatherData.humidity}% </li>
                <li><span className="font-weight-bold">Wind:</span> {weatherData.wind}km/hr</li>
            </ul>
            </div>
            </div>
       </div>
      );
} else{
    const apiKey="29a44231d6c7563fcc1740ef29d751ed";
    let city = "San Francisco";
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Searching...";
}
    
}