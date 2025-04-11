import React from 'react';
import './HomePageProductCard.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";


const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading , allProducts} = context;
  return (
    <div className="homepage-container">
      <h1 className="heading">Bestselling Products</h1>
      <div className="loader">{loading && <Loader/>} </div>
      <div className="card-container">
        { allProducts.slice(0,8).map((item, index) => {
          const { id, title, price,productImageUrl } = item
          
          return(
          <div key={index} className="card">
            <img onClick={()=> navigate('/productinfo')} className="card-image"  src={productImageUrl} alt="img" />
            <div className="card-body">
              <h2 className="card-category">StyleWish</h2>
              <h1 className="card-title"> {title.substring(0, 25)}</h1>
              <h1 className="card-price"> ₹{price}</h1>
              <button className="card-button">Add To Cart</button>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  );
};

export default HomePageProductCard;
