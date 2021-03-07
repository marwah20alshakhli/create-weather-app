import React from "react";
import Weather from "./Weather";
import './App.css';
import './Forecast.css';
import './Weather.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Ostend"/>
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
