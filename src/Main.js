import React, { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";

export default function Main() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [icon, setIcon] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34ae1065362d42545661451bda2b8a1f&units=metric`;

  let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  function submitInput(event) {
    event.preventDefault();

    const showTemperature = (response) => {
      setTemperature(response.data.main.temp);
      setWindSpeed(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
    };

    axios.get(apiUrl).then(showTemperature);
  }

  function updateInput(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <header className="Header ">
        <form className="mb-4" onSubmit={submitInput}>
          <input
            type="search"
            placeholder="Enter a city.."
            id="search-input"
            required
            className="col-sm-8 me-4 p-3 border-0 rounded"
            onChange={updateInput}
          />
          <input
            type="submit"
            value="Search"
            id="search-button"
            className="p-3 rounded col-sm-3 border-0"
          />
        </form>
        <hr />
      </header>
      <main>
        {temperature ? (
          <div class="current-weather row d-flex flex-row pt-3">
            <div className="col-7">
              <h1 className="display-3   fw-bold">{city}</h1>
              <p id="current-date" className="fs-6">
                <span id="the-current-date">Saturday 15:32</span> ,
                <span id="description">{description}</span>
                <br />
                Humidity: <strong id="humidity">{humidity}%</strong>, Wind:
                <strong id="wind">{windSpeed}km/h</strong>
              </p>
            </div>
            <div className="d-flex col-5 p-0">
              <span className="icon mt-5">
                <img src={iconUrl} alt="weather icon" className="img-fluid" />
              </span>
              <span className="degrees" id="temp">
                {Math.round(temperature)}
              </span>
              <p className="unit mt-4">°C</p>
            </div>
          </div>
        ) : (
          <div>
            <Hourglass
              visible={true}
              height="60"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#B7B6BC", "#B7B6BC"]}
            />
          </div>
        )}
      </main>
    </div>
  );
}
