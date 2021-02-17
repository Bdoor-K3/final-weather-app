import React from "react";
import './App.css';
import Weather  from "./Weather";

export default function App (){
  return (
  <div className = "App">
    <div className = "container">
    <Weather defaultCity="San Francisco"/>
    <footer><a href="https://github.com/alarkin09/react-final-weather-app" target="_blank">Open source code</a>{" "}by Allyson Larkin
    </footer>
    </div>
  </div>
  );
}
