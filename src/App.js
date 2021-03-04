import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import './App.css';
import './Forecast.css';
import './Weather.css';

function App() {
  return (
    <div className="App">
      <Weather/>
      <Forecast/>
      <footer>
        This is <a href="https://github.com/marwah20alshakhli/create-weather-app" target="_blank" rel="noreferrer">
        {""} coded {""}
        </a> 
        by Marwah
      </footer>
    </div>
  );
}

export default App;
