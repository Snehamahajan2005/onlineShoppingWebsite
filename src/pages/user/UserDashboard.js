import React from "react";
import Layout from "../../components/layout/Layout";
import "./UserDashboard.css"; // Importing the external CSS file

const products = [
    {
        id: 1,
        name: "Nike Air Force 1 07 LV8",
        imageSrc:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
        href: "#",
        price: "₹61,999",
        color: "Orange",
        imageAlt: "Nike Air Force 1 07 LV8",
        quantity: 1,
    },
];

const UserDashboard = () => {
    return (
        <Layout>
            <div className="container">
                {/* User Profile Section */}
                <div className="profile-card">
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Profile" className="profile-img" />
                    <h1 className="profile-text"><span className="bold">Name:</span> Kamal Nayan Upadhyay</h1>
                    <h1 className="profile-text"><span className="bold">Email:</span> test@gmail.com</h1>
                </div>

                {/* Order Details Section */}
                <div className="order-section">
                    <h2 className="order-title">Order Details</h2>
                    <div className="order-card">
                        {/* Order Info */}
                        <div className="order-info">
                            <div className="info-item">
                                <span className="info-label">Order Id</span>
                                <span className="info-value">#74557994327</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Date</span>
                                <span className="info-value">4 March, 2023</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Total Amount</span>
                                <span className="info-value">₹84,499</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Order Status</span>
                                <span className="status confirmed">Confirmed</span>
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className="product-list">
                            {products.map((product) => (
                                <div key={product.id} className="product-item">
                                    <img className="product-img" src={product.imageSrc} alt={product.imageAlt} />
                                    <div className="product-details">
                                        <p className="product-name">{product.name}</p>
                                        <p className="product-color">{product.color}</p>
                                        <p className="product-quantity">x {product.quantity}</p>
                                    </div>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
