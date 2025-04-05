import React from "react";
import Layout from "../../components/layout/Layout";
import { FaTrash } from "react-icons/fa";
import "./CartPage.css"; // Importing the separate CSS file

// Dummy product data
const products = [
    {
        id: 1,
        name: "Nike Air Force 1 07 LV8",
        price: "₹47,199",
        originalPrice: "₹48,900",
        discount: "5% Off",
        color: "Orange",
        size: "8 UK",
        imageSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    },
    {
        id: 2,
        name: "Nike Blazer Low 77 SE",
        price: "₹1,549",
        originalPrice: "₹2,499",
        discount: "38% Off",
        color: "White",
        size: "8 UK",
        imageSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
    },
    {
        id: 3,
        name: "Nike Air Max 90",
        price: "₹2,219",
        originalPrice: "₹9,999",
        discount: "78% Off",
        color: "Black",
        imageSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
    },
];

const CartPage = () => {
    return (
        <Layout>
            <div className="container">
                <div className="cart-content">
                    <h1 className="cart-title">Shopping Cart</h1>
                    <form className="cart-form">
                        {/* Cart Items Section */}
                        <section className="cart-items">
                            <h2 className="sr-only">Items in your shopping cart</h2>
                            <ul className="cart-list">
                                {products.map((product) => (
                                    <li key={product.id} className="cart-item">
                                        {/* Product Image */}
                                        <img src={product.imageSrc} alt={product.name} className="product-image" />
                                        
                                        {/* Product Details */}
                                        <div className="product-info">
                                            <h3>
                                                <a href="#" className="product-name">{product.name}</a>
                                            </h3>
                                            <p className="product-details">{product.color} | Size: {product.size}</p>
                                            <div className="product-pricing">
                                                <p className="original-price">{product.originalPrice}</p>
                                                <p className="discounted-price">{product.price}</p>
                                                <p className="discount">{product.discount}</p>
                                            </div>
                                        </div>

                                        {/* Quantity and Remove Button */}
                                        <div className="product-actions">
                                            <button className="quantity-btn">-</button>
                                            <input type="text" defaultValue={1} className="quantity-input" />
                                            <button className="quantity-btn">+</button>
                                            <button className="remove-btn">
                                                <FaTrash className="trash-icon" /> Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order Summary Section */}
                        <section className="order-summary">
                            <h2 className="summary-title">Price Details</h2>
                            <div className="summary-content">
                                <div className="summary-row">
                                    <span>Price (3 items)</span>
                                    <span>₹52,398</span>
                                </div>
                                <div className="summary-row">
                                    <span>Discount</span>
                                    <span className="free">- ₹3,431</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Charges</span>
                                    <span className="free">Free</span>
                                </div>
                                <div className="summary-total">
                                    <span>Total Amount</span>
                                    <span>₹48,967</span>
                                </div>
                            </div>
                            <button className="buy-now-btn">Buy Now</button>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
