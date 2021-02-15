import React from "react";
import "./Weather.css";

export  default function Weather (){
    return (<div className="Weather">
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
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation</li>
                <li>Humidity</li>
                <li>Wind</li>
            </ul>
        </div>
        </div>);
}