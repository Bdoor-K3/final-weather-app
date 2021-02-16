import React from "react";
import "./Weather.css";
import axios from "axios";

export  default function Weather (){
    const apiKey="29a44231d6c7563fcc1740ef29d751ed";
    let city = "Geneva"
    let apiUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    function handleResponse(response){
        console.log(response.data);
    }
    axios.get(apiUrl).then(handleResponse);



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
        
        <h1>Geneva</h1>
        <ul>
            <li>Monday 12:00</li>
            <li>Partly Sunny</li>
        </ul>
        <div className="row mt-3" >
            <div className="col-6">
                <div className="clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Sunny" className="float-left"/>
                <div className="float-left">
                <span className="temperature">7</span>
                <span className="unit">°C</span>
                </div>
                </div>
                </div>
            <div className="col-6">
            <ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li>
            </ul>
            </div>
            </div>
       </div>
      );
}