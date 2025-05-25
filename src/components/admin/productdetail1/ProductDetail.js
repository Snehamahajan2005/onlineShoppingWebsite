// ProductDetail.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from "../../../context/myContext";
import Loader from "../../loader/Loader";
import { ref, remove } from 'firebase/database';
import { database } from '../../../firebase/firebase';
import "./ProductDetail.css";
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { loading, allProducts, setLoading, fetchAllProducts } = useContext(myContext);
  const navigate = useNavigate();
    // delete product  function 
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setLoading(true);
      try {
        await remove(ref(database, `products/${id}`));
        toast.success("Product deleted successfully!");
  
        // 👇 Re-fetch the product list after deletion
        fetchAllProducts(); // Make sure this function is defined and imported correctly
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Something went wrong while deleting the product.");
      } finally {
        setLoading(false);
      }
    }
  };
  
  return (
    <div className="product-detail-main">
      {/* Header section with title and add button */}
      <div className="product-detail-header">
        <h1 className="product-title">All Product</h1>
        <Link to="/addproduct">
          <button className="add-product-btn">Add Product</button>
        </Link>
      </div>

      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}

      {/* Product table */}
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}.</td>
                <td>
                  <img src={item.productImageUrl} alt="product" className="product-image-admin" />
                </td>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td
                  onClick={() => navigate(`/updateproduct/${item.id}`)}
                  className="edit-btn"
                >
                  Edit
                </td>
                <td
                  onClick={() => handleDelete(item.id)}
                  className="delete-btn"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;

