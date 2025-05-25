import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import "./UserDashboard.css"; // External CSS

const UserDashboard = () => {
  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("users"));

  // Access context
  const { loading,allOrders } = useContext(myContext);

  // Filter user orders using multiple checks for flexibility
  const userOrders = Array.isArray(allOrders)
    ? allOrders.filter((orders) => orders.userId === user?.uid)
    : [];

  // Debug logs (optional)
  console.log("Logged-in User UID:", user?.uid);
  console.log("All Orders:", allOrders);
  console.log("Filtered Orders:", userOrders);

  return (
    <Layout>
      <div className="container">
        {/* User Profile Section */}
        <div className="profile-card">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt="Profile"
            className="profile-img"
          />
          <h1 className="profile-text">
            <span className="bold">Name:</span> {user?.name}
          </h1>
          <h1 className="profile-text">
            <span className="bold">Email:</span> {user?.email}
          </h1>
          <h1 className="profile-text">
            <span className="bold">Date:</span> {user?.date}
          </h1>
          <h1 className="profile-text">
            <span className="bold">Role:</span> {user?.userType}
          </h1>
        </div>

        {/* Order Details Section */}
        <div className="order-section">
          <h2 className="order-title">Order Details</h2>

          {/* Loader */}
          {loading && (
            <div className="loader-wrapper">
              <Loader />
            </div>
          )}

          {/* No Orders Found */}
          {!loading && userOrders.length === 0 && (
            <p className="no-orders-text">No orders found for this user.</p>
          )}

          {/* Orders */}
          {userOrders.map((orders, index) => (
            <div key={index} className="order-card">
              {/* Order Info */}
              <div className="order-info">
                <div className="info-item">
                  <span className="info-label">Order Id</span>
                  <span className="info-value">#{orders.id}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Date</span>
                  <span className="info-value">
                  {orders.date}

                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Total Amount</span>
                  <span className="info-value">
                    ₹
                    {orders.cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Order Status</span>
                  <span className="status confirmed">
                    {orders.status?.charAt(0).toUpperCase() +
                      orders.status?.slice(1)}
                  </span>
                </div>
              </div>

              {/* Product List */}
              <div className="product-list">
                {orders.cartItems.map((product, i) => (
                  <div key={i} className="product-item">
                    <img
                      className="product-img"
                      src={product.productImageUrl}
                      alt={product.title}
                    />
                    <div className="product-details">
                      <p className="product-name">{product.title}</p>
                      <p className="product-color">{product.category}</p>
                      <p className="product-quantity">x {product.quantity}</p>
                    </div>
                    <p className="product-price">₹{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
