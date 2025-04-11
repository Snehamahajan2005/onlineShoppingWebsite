import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './AdminDashboard.css';
import ProductDetail from "../../../components/admin/productdetail1/ProductDetail";
import OrderDetail from "../../../components/admin/OrderDetail/OrderDetail";
import UserDetail from "../../../components/admin/userdetail/UserDetail";
import Layout from "../../../components/layout/Layout";
import {  useContext } from 'react';
import myContext from "../../../context/myContext";

const AdminDashboard = () => {
    //user
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const {allProducts} = context;
    return (
        <Layout>
        <div className="dashboard-container">
            {/* Top Section */}
            <div className="top-section">
                <h1 className="dashboard-title">Admin Dashboard</h1>
            </div>

            {/* Profile Section */}
            <div className="profile-card">
                <div className="profile-image">
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Admin" />
                </div>
                <div className="profile-info">
                    <p><span className="label">Name:</span>{user?.name}</p>
                    <p><span className="label">Email:</span>  {user?.email}</p>
                    <p><span className="label">Date:</span>{user?.date}</p>
                    <p><span className="label">userType:</span>  {user?.userType}</p>
                </div>
            </div>

            {/* Tab Section */}
            <div className="tabs-section">
                <Tabs>
                    <TabList className="tab-list">
                        {/* Total Products */}
                        <Tab className="tab-item">
                            <div className="tab-card">
                                <div className="tab-icon">
                                    {/* Shopping Basket Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path d="m5 11 4-7" />
                                        <path d="m19 11-4-7" />
                                        <path d="M2 11h20" />
                                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                        <path d="m9 11 1 9" />
                                        <path d="M4.5 15.5h15" />
                                        <path d="m15 11-1 9" />
                                    </svg>
                                </div>
                                <h2 className="tab-number">{allProducts.length}</h2>
                                <p className="tab-label">Total Products</p>
                            </div>
                        </Tab>

                        {/* Total Orders */}
                        <Tab className="tab-item">
                            <div className="tab-card">
                                <div className="tab-icon">
                                    {/* List Ordered Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <line x1={10} x2={21} y1={6} y2={6} />
                                        <line x1={10} x2={21} y1={12} y2={12} />
                                        <line x1={10} x2={21} y1={18} y2={18} />
                                        <path d="M4 6h1v4" />
                                        <path d="M4 10h2" />
                                        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                    </svg>
                                </div>
                                <h2 className="tab-number">10</h2>
                                <p className="tab-label">Total Orders</p>
                            </div>
                        </Tab>

                        {/* Total Users */}
                        <Tab className="tab-item">
                            <div className="tab-card">
                                <div className="tab-icon">
                                    {/* Users Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <h2 className="tab-number">10</h2>
                                <p className="tab-label">Total Users</p>
                            </div>
                        </Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <div className="tab-content"><ProductDetail/></div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content"><OrderDetail/></div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content"><UserDetail/></div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        </Layout>
    );

};

export default AdminDashboard;

