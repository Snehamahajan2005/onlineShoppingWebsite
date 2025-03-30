//import COLOR from "../../config/color";
import "./style.css" ;
import React from 'react';
//import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";

function HomePage() {
  return(
  <Layout>
  
        <HeroSection/>
       
        <Category/>
      
  </Layout>
  );
}
export default HomePage;
