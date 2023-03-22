import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { BiSearch } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [location, setLocation] = useState("New Delhi");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
          .get(
            `https://api.weatherapi.com/v1/forecast.json?key=14c58b6a7e064ad09f871903232602&q=${location}`
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
    const value = document.getElementById("location").value;
    setLocation(value);
    document.getElementById("location").value = "";
  };

  return (
    <nav>
      <Toaster />
      <div className="leftNav">
        <Link to="/">Current</Link>
        <Link to="/hourly">Hourly</Link>
      </div>
      <div className="rightNav">
        <div className="searchBar">
          <input type="text" id="location" />
          <button onClick={handleSearch}>
            <BiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
