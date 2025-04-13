import React, { useContext, useEffect } from 'react';
import './HomePageProductCard.css';
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, allProducts } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Add item to cart
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  // Remove item from cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="homepage-container">
      <h1 className="heading">Bestselling Products</h1>
      <div className="loader">{loading && <Loader />}</div>
      <div className="card-container">
        {allProducts.slice(0, 8).map((item, index) => {
          const { id, title, price, productImageUrl } = item;

          return (
            <div key={index} className="card">
              <img
                onClick={() => navigate(`/productinfo/${id}`)}
                className="card-image"
                src={productImageUrl}
                alt="img"
              />
              <div className="card-body">
                <h2 className="card-category">StyleWish</h2>
                <h1 className="card-title">{title.substring(0, 25)}</h1>
                <h1 className="card-price">₹{price}</h1>
                {/* Check if item is already in cart */}
                {cartItems.some((p) => p.id === item.id) ? (
                  <button
                    onClick={() => deleteCart(item)}
                    className="card-button delete"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addCart(item)}
                    className="card-button"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageProductCard;
