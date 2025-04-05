// AdminDashboard.js
import React from "react";
import "./AdminDashboard.css"; // Importing the separate CSS file

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
            </div>

            {/* User Info Section */}
            <div className="user-info">
                <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Admin" className="user-avatar" />
                <h2><span>Name:</span> Kamal Nayan Upadhyay</h2>
                <h2><span>Email:</span> test@gmail.com</h2>
            </div>

            {/* Statistics Section */}
            <div className="stats-container">
                <div className="stat-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stat-icon">
                        <path d="m5 11 4-7" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                        <path d="m9 11 1 9" />
                        <path d="M4.5 15.5h15" />
                        <path d="m15 11-1 9" />
                    </svg>
                    <h3>10</h3>
                    <p>Total Products</p>
                </div>
                <div className="stat-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stat-icon">
                        <line x1={10} x2={21} y1={6} y2={6} />
                        <line x1={10} x2={21} y1={12} y2={12} />
                        <line x1={10} x2={21} y1={18} y2={18} />
                        <path d="M4 6h1v4" />
                        <path d="M4 10h2" />
                        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                    </svg>
                    <h3>10</h3>
                    <p>Total Orders</p>
                </div>
                <div className="stat-card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stat-icon">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h3>10</h3>
                    <p>Total Users</p>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
