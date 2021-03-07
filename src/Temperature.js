import React, {useState} from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")

    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheit(){
        return(props.celsius*9 / 5) + 32;
    }
    if (unit === "celsius"){
        return(
            <div className="Temperature">
                <h2>
                    <span>{Math.round(props.celsius)}</span>
                    <span className="unit"> °C{" "} |
                <a href="/" onClick={convertToFahrenheit}>
                {""}  F
                </a>
                </span>
                </h2>
            </div>
        );
    } else {
        return(
            <div className="Temperature">
                <h2>
                    <span>{Math.round(fahrenheit())}</span>
                    <span className="unit">
                    <a href="/" onClick={convertToCelsius}>
                    {" "}°C
                    </a>
                    |  F 
                    </span>
                </h2>
            </div>
        )
    }
}