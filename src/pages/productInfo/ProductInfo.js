import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import "./ProductInfo.css"; // Simple and separate CSS
import { useParams } from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "../../firebase/firebase";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    // Fetch product data from Realtime Database
    const getProductData = async () => {
        setLoading(true);
        try {
            const snapshot = await get(ref(database, `products/${id}`));
            if (snapshot.exists()) {
                const productData = { ...snapshot.val(), id };
                setProduct(productData);
            }
            setLoading(false);
        } catch (error) {
            console.log("Error fetching product:", error);
            setLoading(false);
        }
    };

    // Add to Cart
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    // Delete from Cart
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        getProductData();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="product-section">
                {loading ? (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                ) : (
                    <div className="container">
                        <div className="product-wrapper">
                            <div className="product-image">
                                <img
                                    src={product?.productImageUrl}
                                    alt={product?.title}
                                    className="product-img-product"
                                />
                            </div>
                            <div className="product-details">
                                <h2 className="product-title">{product?.title}</h2>

                                <div className="product-rating">
                                    {[...Array(4)].map((_, index) => (
                                        <span key={index} className="star">&#9733;</span>
                                    ))}
                                </div>

                                <p className="product-price">₹ {product?.price}</p>

                                <div className="product-description">
                                    <h2>Description :</h2>
                                    <p>{product?.description}</p>
                                </div>

                                {/* Conditional Add/Delete to Cart Button */}
                                {cartItems.some((p) => p.id === product?.id) ? (
                                    <button
                                        onClick={() => deleteCart(product)}
                                        className="delete-from-cart-btn"
                                    >
                                        Delete from cart
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => addCart(product)}
                                        className="add-to-cart-btn"
                                    >
                                        Add to cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
