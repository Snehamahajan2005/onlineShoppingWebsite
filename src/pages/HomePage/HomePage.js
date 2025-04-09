//import COLOR from "../../config/color";
import "./style.css" ;
import React, { useContext } from 'react';
//import Navbar from "../../components/Navbar/Navbar";
//import { Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Loader from "../../components/loader/Loader";
function HomePage() {
  
  return(
  <Layout>
  
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        <Loader/>
      
  </Layout>
  );
}
export default HomePage;
