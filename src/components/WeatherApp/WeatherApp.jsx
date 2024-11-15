import React from "react";
import "./WeatherApp.css";
// // import Images
// import clearIcon from "../Images/clear.png";
// import fewCloudIcon from "../Images/fewcloud.png";
// import drizzleIcon from "../Images/drizzle.png";
// import rainIcon from "../Images/rain.png";
// import snowIcon from "../Images/snow.png";

const WeatherApp = () => {
  // https://api.openweathermap.org/data/2.5/weather?sudan&units=Metric&appid=
  let apiKey = "5bee9409422e0cbb48b419d5857af38b";
  const handleSearch = async () => {
    const ele = document.getElementsByClassName("cityInput");
    if (ele[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ele[0].value}&units=Metric&appid=${apiKey}`;
    let res = await fetch(url),
      data = await res.json(),
      humidity = document.getElementsByClassName("humidity"),
      wind = document.getElementsByClassName("wind"),
      temp = document.getElementsByClassName("temp"),
      location = document.getElementsByClassName("location"),
      weatherIcon = document.getElementsByClassName("weatherImg");
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
    weatherIcon[0].innerHTML = `<img src="Images/${
      data.weather[0].icon + ".png"
    }" id="state" alt="" />`;
  };

  return (
    <div className="weather">
      <div className="topBar">
        <input type="text" className="cityInput" placeholder="Place please" />
        <button className="searchIcon" onClick={handleSearch}>
          <img src="Images/search.png" alt="Search" />
        </button>
      </div>
      <div className="weatherImg" id="wImg">
        <img src="Images/clear.png" alt="" />
      </div>
      <div className="detiles">
        <div className="temp">31°C</div>
        <div className="location">sudan</div>
        <div className="eleContainer">
          <div className="element">
            <img src="Images/humidity.png" alt="" className="icon" />
            <div className="data">
              <div className="humidity">
                50<span>%</span>
              </div>
              <div className="text">humidity</div>
            </div>
          </div>
          <div className="element">
            <img src="Images/wind.png" alt="" className="icon" />
            <div className="data">
              <div className="wind">11 km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
