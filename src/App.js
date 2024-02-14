import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [temp, setTemp] = useState(null);

  const showTemperature = (response) => {
    setTemp(response.data.main.temp);
  };

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

  axios.get(apiUrl).then(showTemperature);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The weather is Lagos is {temp}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
