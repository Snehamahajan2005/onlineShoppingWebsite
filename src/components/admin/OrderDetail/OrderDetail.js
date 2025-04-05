import React from 'react';
import './OrderDetail.css';

const OrderDetail = () => {
    return (
        <div className="order-container">
            {/* Header section */}
            <div className="order-header">
                <h1 className="order-title">All Order</h1>
            </div>

            {/* Table section */}
            <div className="table-wrapper">
                <table className="order-table">
                    <thead>
                        <tr>
                            <th className="table-head">S.No.</th>
                            <th className="table-head">Location Name</th>
                            <th className="table-head">Action</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-data">1.</td>
                            <td className="table-data">name</td>
                            <td className="table-action edit">Edit</td>
                            <td className="table-action delete">Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetail;
