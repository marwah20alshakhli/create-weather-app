import React from "react";
import CorrectDate from "./CorrectDate"


export default function BasicInfo(props){
    return(
        <div className="BasicInfo">
        <ul>
            <li><CorrectDate date={props.info.date}/></li>
            <li className="description">{props.info.description}</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
        </ul>
        </div>
    );
}