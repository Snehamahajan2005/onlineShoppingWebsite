import React from 'react';
import Layout from "../../components/layout/Layout";
import "./ProductInfo.css"; // Import the CSS file

const ProductInfo = () => {
    return (
        <Layout>
            <section className="product-section">
                <div className="container">
                    <div className="product-wrapper">
                        <div className="product-image">
                            <img
                                src="https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg"
                                alt="Product"
                            />
                        </div>
                        <div className="product-details">
                            <h2 className="product-title">
                                Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
                            </h2>
                            <div className="product-rating">
                                {[...Array(4)].map((_, index) => (
                                    <span key={index} className="star">&#9733;</span>
                                ))}
                            </div>
                            <p className="product-price">Rs.7,000.00</p>
                            <div className="product-description">
                                <h2>Description :</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                                    explicabo enim ratione voluptatum at cupiditate delectus nemo dolorum
                                    officia esse beatae optio ut mollitia sit omnis, possimus nesciunt
                                    voluptas natus!
                                </p>
                            </div>
                            <button className="add-to-cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProductInfo;
