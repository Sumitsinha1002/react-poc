import React from "react";
import weather from "openweather-apis";
import "./weather.scss";
import "./../../assets/weather-icons-master/css/weather-icons.css";
import { transformData } from "./../../utils/weather-data-transform";

let url = "https://api.ipdata.co/?api-key=0ddcadf5faa774a34944e157890a18cf75567d14812b16297f22f804";
let appId = "84c61d20a8a097b1fd8195c838ad28b7";
weather.setLang("en");
weather.setAPPID(appId);
let weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat, lon, city;
let componentName = "weather";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
    };
    this.getPrediction = this.getPrediction.bind(this);
  }

  getPrediction() {
    fetch(
      weatherUrl +
        `lat=${lat}&lon=${lon}&%20exclude=hourly,daily&appid=${appId}`
    )
      .then((response) => response.json())
      .then((data) => {
        let transformedData = transformData(data);
        this.setState(() => {
          return {
            weatherData: transformedData,
          };
        });
        console.log(this.state);
      });
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        lat = data.latitude;
        lon = data.longitude;
        city = data.city;
        this.getPrediction();
        console.log(this.state);
      });
  }

  weatherPrediction = (data) => {
    return (
      <div className={`${componentName}__predict-div`}>
        <i key={data.day} className={`wi wi-predict wi-owm-${data.icon}`}></i>
        <div>{data.day}</div>
        <div>
          Min: {data.tempMin} <i className="wi wi-celsius"></i>
        </div>
        <div>
          Max: {data.tempMax} <i className="wi wi-celsius"></i>
        </div>
      </div>
    );
  };

  currentWeather = (data) => {
    return (
      <div className={`${componentName}__current-div`}>
        <div className={`${componentName}__current-info`}>
          <p className={`${componentName}__city-header`}>{city}</p>
          <p className={`${componentName}__day-header`}>{data.day}</p>
          <p className={`${componentName}__text`}>
            {data.weatherType[0].toUpperCase() + data.weatherType.slice(1)}
          </p>
          <p className={`${componentName}__text`}>
            {data.currentTemp}
            <i className="wi wi-celsius"></i>
          </p>
          <p className={`${componentName}__text`}>
            {data.humidity} <i className="wi wi-humidity"></i>
          </p>
          <p className={`${componentName}__text`}>
            {data.windSpeed} <i className="wi wi-strong-wind"></i>
          </p>
        </div>
        <div className={`${componentName}__current-icon`}>
          <i
            key={data.day}
            className={`wi wi-current wi-owm-${data.dayOrNight}${data.icon}`}
          ></i>
        </div>
      </div>
    );
  };

  render() {
    return this.state.weatherData.map((data) =>
      data.todayData ? this.currentWeather(data) : this.weatherPrediction(data)
    );
  }
}

export default Weather;
