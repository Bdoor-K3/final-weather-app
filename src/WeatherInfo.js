import react from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
 <h1>{props.data.city}</h1>
        <ul>
            <li> <FormattedDate date={props.data.date}/> </li>
            <li className="text-capitalize"> {props.data.description} </li>
        </ul>
        <div className="row mt-3" >
            <div className="col-6">
                <div className="clearfix">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon} alt={props.data.description}/></div>
                <div className="float-left">
                    <WeatherTemperature celsius ={props.data.temperature}/>
                </div>
                </div>
                </div>
            <div className="col-6">
            <ul>
                <li><span className="font-weight-bold">Precipitation: %</span></li>
                <li><span className="font-weight-bold">Humidity:</span> {props.data.humidity}% </li>
                <li><span className="font-weight-bold">Wind:</span> {props.data.wind}km/hr</li>
            </ul>
            </div>
        </div>
        </div>
    );
}