import React, { useContext } from 'react';
import myContext from '../../../context/myContext';
import './OrderDetail.css';

const OrderDetail = () => {
    const context = useContext(myContext);
    const { allOrders , deleteOrder } = context;

    return (
        <div className="order-container">
            {/* Header section */}
            <div className="order-header">
                <h1 className="order-title">All Orders</h1>
            </div>

            {/* Table section */}
            <div className="table-wrapper">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th className="table-head">S.No.</th>
                            <th className="table-head">Order Id</th>
                            <th className="table-head">Image</th>
                            <th className="table-head">Title</th>
                            <th className="table-head">Category</th>
                            <th className="table-head">Price</th>
                            <th className="table-head">Quantity</th>
                            <th className="table-head">Total Price</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Address</th>
                            <th className="table-head">Pincode</th>
                            <th className="table-head">Phone</th>
                            <th className="table-head">Email</th>
                            <th className="table-head">Date</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((orders, orderIndex) => (
                            orders.cartItems.map((item, itemIndex) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                return (
                                    <tr key={`${orderIndex}-${itemIndex}`}>
                                        <td className="table-data">{itemIndex + 1}</td>
                                        <td className="table-data">{id}</td>
                                        <td className="table-data">
                                            <img src={productImageUrl} alt="product" className="product-img" />
                                        </td>
                                        <td className="table-data">{title}</td>
                                        <td className="table-data">{category}</td>
                                        <td className="table-data">₹{price}</td>
                                        <td className="table-data">{quantity}</td>
                                        <td className="table-data">₹{price * quantity}</td>
                                        <td className="table-data status">{orders.status}</td>
                                        <td className="table-data">{orders.addressInfo.name}</td>
                                        <td className="table-data">{orders.addressInfo.address}</td>
                                        <td className="table-data">{orders.addressInfo.pincode}</td>
                                        <td className="table-data">{orders.addressInfo.mobileNumber}</td>
                                        <td className="table-data">{orders.email}</td>
                                        <td className="table-data">{orders.date}</td>
                                        <td onClick={()=> deleteOrder(orders.id)} className="table-action delete">Delete</td>
                                    </tr>
                                );
                            })
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
