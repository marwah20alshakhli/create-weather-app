import React, {useState} from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDeafault();
        setUnit("fahrenheit")

    }

    function convertToCelsius(event){
        event.preventDeafault();
        setUnit("celsius")
    }
    if (unit === "celsius"){
        return(
            <div className="Temperature">
                <h2>
                    <span className="temperature">{Math.round(props.temp.temperature)}</span>{""}
                    <span className="unit"> °C{" "} |
                <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
                {""}  F
                </a>
                </span>
                </h2>
            </div>
        );
    } else{
        return(
            <div className="Temperature">
                <h2>
                    <span className="temperature">{Math.round(props.temp.temperature)}</span>{""}
                    <span className="unit"> |  F 
                    <a href="/" className="celsius" onClick={convertToCelsius}>
                    {" "}°C
                    </a>
                    </span>
                </h2>
            </div>
        )
    }
}