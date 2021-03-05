import React from "react";

export default function Temperature(props){
    return(
        <div className="Temperature">
            <h2>
                <span className="temperature">{Math.round(props.temp.temperature)}</span>{""}
                <a href="/" className="celsius">
                {" "}°C
                </a>
                |
                <a href="/" className="fahrenheit">
                    F
                </a>
                </h2>
        </div>
    )
}