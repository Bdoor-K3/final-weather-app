import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const  [forecast, setForecast ] = useState(null);

    function handleForecast(response){
        setForecast(response.data);
        setLoaded(true);
        
    }
if (loaded && props.city === forecast.city.name){
    return (
    <div className="WeatherForecast row">
            <WeatherForecastPreview data={forecast.list[0]}/>
            <WeatherForecastPreview data={forecast.list[1]}/>
            <WeatherForecastPreview data={forecast.list[2]}/>
            <WeatherForecastPreview data={forecast.list[3]}/>
            <WeatherForecastPreview data={forecast.list[4]}/>
            <WeatherForecastPreview data={forecast.list[5]}/>
    </div>
    )
} else {
let apiKey = "29a44231d6c7563fcc1740ef29d751ed";
    let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecast);
    return null; 
}
}