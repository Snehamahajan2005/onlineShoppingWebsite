import React from 'react';
import  herosection1 from "../../assests/images/herosection1.webp";
import "./style.css";
const HeroSection = () => {
    return (
        <div className="hero-section-container">
           <img className="hero-section-image" src={herosection1} alt="herosection" />
        </div>
    );
}

export default HeroSection;