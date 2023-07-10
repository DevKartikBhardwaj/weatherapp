import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import logo from "../images/logo.png";

const Header = () => {
  const [location, setLocation] = useState("Roorkee");
  const locationRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
          .get(
            `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
          )
          .catch((err) => {
            toast.error("Cannot find that!");
          });
        dispatch({
          type: "setData",
          payload: data,
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [dispatch, location]);

  const handleSearch = () => {
    const value = locationRef.current.value;
    setLocation(value);
    locationRef.current.value = "";
  };

  return (
    <nav>
      <Toaster />
      <div className="leftNav">
        <span>
          <img src={logo} alt="logo" height={"25px"} />
          मौसम
        </span>
      </div>
      <div className="rightNav">
        <Link to="/">Current</Link>
        <Link to="/hourly">Hourly</Link>

        <div className="searchBar">
          <input type="text" id="location" ref={locationRef} />
          <button onClick={handleSearch}>
            <BiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
