import React, {useState} from "react";
import BasicInfo from "./BasicInfo";
import Temperature from "./Temperature";
import axios from "axios";
import './Weather.css';
import './App.css';


export default function Weather(props){
    const [weather, setWeather] = useState({})
    const [load, setLoad] = useState(false);

    function dataResponse(response){
        setWeather({
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            city: response.data.name
        });
        setLoad(true);
    }

    if (load) {
        return(
            <div className="Weather">
                <h1>{weather.city}</h1>
                <div className="row">
                    <div className="col-6">
                <BasicInfo info={weather}/>
                <form>
                    <input type="search" placeholder="Search a city" className="search"/>
                    <input type="submit" value="Search" className="button" />
                </form>
                </div>
                    <div className="col-3">
                <Temperature temp={weather}/>
                    </div>
                </div>
            </div>
        )

    } else {
    const apiKey="125ae54afb30daf43aec3cdb943d26b0";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dataResponse);
    }
    return("No temperature available at the moment")
}