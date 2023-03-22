import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Footer from "./components/Footer";

//all styles here
import "./styles/colors.scss";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/current.scss";
import "./styles/footer.scss";
import "./styles/hourly.scss";
import "./styles/loader.scss";
import "./styles/media.scss";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/hourly" element={<Hourly />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
