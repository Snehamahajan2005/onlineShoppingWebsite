import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { FaTrash } from "react-icons/fa";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { ref, push } from "firebase/database";
import { Navigate } from "react-router"
import { database } from "../../firebase/firebase"; // using realtime db

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const cartItemTotal = cartItems.map(item => item.quantity).reduce((a, b) => a + b, 0);
    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Get user
    const user = JSON.parse(localStorage.getItem("users"));

    // Address Info
    const [addressInfo, setAddressInfo] = useState({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    // Buy Now Function
    const buyNowFunction = () => {
        // Validation
        const { name, address, pincode, mobileNumber } = addressInfo;
        if (!name || !address || !pincode || !mobileNumber) {
            return toast.error("All fields are required");
        }

        const orderData = {
            cartItems,
            addressInfo,
            email: user.email,
            userId: user.uid,
            status: "confirmed",
            date: new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }),
        };

        try {
            const orderRef = ref(database , "orders");
            push(orderRef, orderData);
            toast.success("Order placed successfully!");
            setAddressInfo({
                name: "",
                address: "",
                pincode: "",
                mobileNumber: "",
            });
        } catch (error) {
            console.error("Order submission failed:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            <div className="container">
                <div className="cart-content">
                    <h1 className="cart-title">Shopping Cart</h1>
                    <form className="cart-form">
                        {/* Cart Items */}
                        <section className="cart-items">
                            <ul className="cart-list">
                                {cartItems.length > 0 ? (
                                    <>
                                        {cartItems.map((item, index) => {
                                            const { id, title, price, productImageUrl, quantity, category } = item;
                                            return (
                                                <li key={index} className="cart-item">
                                                    <img src={productImageUrl} alt="img" className="product-image" />
                                                    <div className="product-info">
                                                        <h3 className="product-name">{title}</h3>
                                                        <p className="product-details">{category}</p>
                                                        <div className="product-pricing">
                                                            <p className="original-price">₹{price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="product-actions">
                                                        <button onClick={() => handleDecrement(id)} className="quantity-btn">-</button>
                                                        <input type="text" value={quantity} readOnly className="quantity-input" />
                                                        <button onClick={() => handleIncrement(id)} className="quantity-btn">+</button>
                                                        <button onClick={() => deleteCart(item)} className="remove-btn">
                                                            <FaTrash className="trash-icon" /> Remove
                                                        </button>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <h1>Not found</h1>
                                )}
                            </ul>
                        </section>

                        {/* Order Summary */}
                        <section className="rder-summary">
                            <h2 className="summary-title">Price Details</h2>
                            <div className="summary-content">
                                <div className="summary-row">
                                    <span>Price ({cartItemTotal} items)</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Charges</span>
                                    <span className="free">Free</span>
                                </div>
                                <div className="summary-total">
                                    <span>Total Amount</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                            </div>

                            {/* Buy Now Modal */}
                            {user ?
                                <BuyNowModal
                                    addressInfo={addressInfo}
                                    setAddressInfo={setAddressInfo}
                                    buyNowFunction={buyNowFunction}
                                />
                            :
                            <Navigate to={'/LoginPage'} />}
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
