import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function ForecastDetail(props){
    function hours(){
        let date = new Date(props.info.dt * 1000);
        let hours = date.getHours()
        return(`${hours}:00`)
    }

    function temperature(){
        let temperature = Math.round(props.info.main.temp)
        return(`${temperature}°C`)
    }

    return(
        <div classNameForecastDetail>
            <div className="col">
                {hours()}
                <br/>
                {temperature()}
                <WeatherIcon code={props.info.weather[0].icon}/>
            </div>
        </div>
    )
}