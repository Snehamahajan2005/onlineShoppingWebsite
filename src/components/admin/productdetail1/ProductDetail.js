import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
    return (
        <div className="product-container">
            {/* Header Section */}
            <div className="product-header">
                <h1 className="product-title">All Product</h1>
                <button className="add-button">Add Product</button>
            </div>

            {/* Table Section */}
            <div className="table-wrapper">
                <table className="product-table">
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

export default ProductDetail;
