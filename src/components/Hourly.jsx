import React from "react";
import { useSelector } from "react-redux";

import Graph from "./Graph";
import Loader from "./Loader";

const Hourly = () => {
  const { forecast } = useSelector((state) => state.main);
  console.log(forecast);
  return Object.keys(forecast) == 0 ? (
    <Loader />
  ) : (
    <main id="hourly-page">
      <div className="leftHourlyComponent">
        <Graph forecast={forecast} />
      </div>
      <div className="rightHourlyComponent">
        <h4>Hourly Forecast</h4>
        <div className="hourlyForecastContainer">
          {forecast.forecast.forecastday[0].hour.map((element) => {
            return (
              <HourlyForecastCard
                icon={element.condition.icon}
                condition={element.condition.text}
                temp={element.temp_c}
                time={element.time.slice(11)}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

const HourlyForecastCard = ({ icon, condition, temp, time }) => {
  return (
    <div className="hourlyForecastCard">
      <img src={icon} alt={condition} />
      <p>{condition}</p>
      <p>{temp}°</p>
      <p>{time}</p>
    </div>
  );
};

export default Hourly;
