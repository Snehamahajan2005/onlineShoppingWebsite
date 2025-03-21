import COLOR from "../../config/color";
import "./style.css" ;
import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return(
  <div className="homePageBaseContainer">
      <div className="homePageNavbarBaseContainer">
        <Navbar/>
      </div>
      <div className="homePageContentBaseContainer">
        <Outlet />
      </div>
    </div>
  );
}
export default HomePage;
