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



    return (<div className="Weather">
        
        <form>
            <div className="row">
                <div className="col-5">
            <input type="search" placeholder="Search city here" className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
        </div>
        </form>
        
        <h1>Geneva</h1>
        <ul>
            <li>Monday 12:00</li>
            <li>Partly Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Sunny"/>
                7° C
            </div>
            <div className="col-6">
            <ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li>
            </ul>
            </div>
        </div>
        </div>);
}