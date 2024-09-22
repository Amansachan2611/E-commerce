import React from 'react'
import './HeroSection.css';
import the_wall from "../../assets/images/index-img/Off-the-Wall.jpg";

const HeroSection = () => (
  <div className="index-main-img">
    <a href="#"><img id="main-index-img" src={the_wall} alt="Main" /></a>
  </div>
);

export default HeroSection