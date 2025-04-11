import React, { useState, useContext } from 'react';
import './AddProductPage.css';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push } from 'firebase/database';
import myContext from "../../../context/myContext";
import toast from 'react-hot-toast';
import Loader from "../../../components/loader/Loader";

const categoryList = [
  { name: 'fashion' },
  { name: 'shirt' },
  { name: 'jacket' },
  { name: 'mobile' },
  { name: 'laptop' },
  { name: 'shoes' },
  { name: 'home' },
  { name: 'books' }
];

function AddProductPage() {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(myContext);

  // Product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    })
  });

  // Add product to Firebase Realtime DB
  const handleAddProduct = async () => {
    const { title, price, productImageUrl, category, description } = product;

    if (!title || !price || !productImageUrl || !category || !description) {
      return toast.error("All fields are required");
    }

    setLoading(true);

    try {
      const db = getDatabase();
      const productRef = ref(db, "products");
      await push(productRef, product);
      toast.success("Product added successfully");
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-main">
      {loading && <Loader />}
      <div className="add-product-container">

        <h2 className="add-product-heading">Add Product</h2>

        <input
          type="text"
          placeholder="Product Title"
          className="add-product-input"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />

        <input
          type="number"
          placeholder="Product Price"
          className="add-product-input"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Product Image Url"
          className="add-product-input"
          value={product.productImageUrl}
          onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
        />

        <select
          className="add-product-select"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        >
          <option disabled value="">Select Product Category</option>
          {categoryList.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Product Description"
          rows="5"
          className="add-product-textarea"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />

        <button className="add-product-button" onClick={handleAddProduct}>
          Add Product
        </button>

      </div>
    </div>
  );
}

export default AddProductPage;
