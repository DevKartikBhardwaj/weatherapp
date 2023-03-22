import React from "react";
import { useSelector } from "react-redux";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Loader from "./Loader";

const Current = () => {
  const { forecast } = useSelector((state) => state.main);
  if (Object.keys(forecast).length === 0) {
    return <Loader />;
  } else {
    const dateData = new Date(forecast.location.localtime).toString();

    const { name, region, country } = forecast.location;
    const { temp_c, feelslike_c, humidity, wind_kph } = forecast.current;
    const { icon, text } = forecast.current.condition;
    const { sunrise, sunset } = forecast.forecast.forecastday[0].astro;
    const { maxtemp_c, mintemp_c } = forecast.forecast.forecastday[0].day;
    // console.log(forecast.forecast);
    return (
      <main className="current">
        <div className="topContainer">
          <h5>
            {dateData.slice(0, 16)} | {dateData.slice(16, 24)}
          </h5>
          <h5 id="heading">
            {name} | {region} | {country}
          </h5>
        </div>
        <div className="middle">
          <div className="middleLeft">
            <img src={icon} alt="weather icon" />
            <div id="middleLeftInner">
              <h1>
                {temp_c}
                <span>°</span>
              </h1>
              <p>{text}</p>
            </div>
          </div>
          <div className="middleRight">
            <div className="middleRightInner">
              <FaTemperatureLow />
              <p>{feelslike_c}°c</p>
            </div>
            <div className="middleRightInner">
              <WiHumidity />
              <p>{humidity}</p>
            </div>
            <div className="middleRightInner">
              <GiWindsock />
              <p>{wind_kph} kph</p>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <BottomComponent icon={<BsFillSunriseFill />} value={sunrise} />
          <BottomComponent icon={<BsFillSunsetFill />} value={sunset} />
          <BottomComponent
            icon={<AiFillCaretUp />}
            value={maxtemp_c}
            symbol={"°c"}
          />
          <BottomComponent
            icon={<AiFillCaretDown />}
            value={mintemp_c}
            symbol={"°c"}
          />
        </div>
      </main>
    );
  }
};

const BottomComponent = ({ icon, value, symbol }) => {
  if (symbol) {
    return (
      <div className="bottomContainerComponent">
        {icon}
        <p>
          {value}
          {symbol}
        </p>
      </div>
    );
  }
  return (
    <div className="bottomContainerComponent">
      {icon}
      <p>{value}</p>
    </div>
  );
};

export default Current;
