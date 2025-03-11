import COLOR from "../../config/color";
import "./style.css" ;
import React from 'react';
import Navbar from "../../components/Navbar/Navbar";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to StyleWish</h1>
      <p>Your one-stop online shopping destination!</p>
    </div>
  );
};

export default HomePage;
