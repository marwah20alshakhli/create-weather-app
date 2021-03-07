import React , {useState} from "react";
import "./Forecast.css";
import axios from "axios"; 
import ForecastDetail from "./ForecastDetail";

export default function Forecast(props){
    const [load, setLoad] = useState(false);
    const [forecast, setForecast] = useState(null);
    function forecastResponse(response){
        setForecast(response.data);
        setLoad(true);
    }

    if (load && props.city === forecast.city.name) {
        return(
            <div className="Forecast row">
                    <ForecastDetail info={forecast.list[0]}/>
                    <ForecastDetail info={forecast.list[1]}/>
                    <ForecastDetail info={forecast.list[2]}/>
                    <ForecastDetail info={forecast.list[3]}/>
                    <ForecastDetail info={forecast.list[4]}/>
                    <ForecastDetail info={forecast.list[5]}/>
            </div>
            )
    } else {
    const apiKey = "125ae54afb30daf43aec3cdb943d26b0";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(forecastResponse);
    return null
    }

    
}