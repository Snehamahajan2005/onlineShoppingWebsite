import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, get, set} from 'firebase/database';
import {database} from '../../../firebase/firebase';
import myContext from '../../../context/myContext';
import Loader from '../../../components/loader/Loader';
import './UpdateProductPage.css';
import toast from 'react-hot-toast';

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

const UpdateProductPage = () => {
  const { loading, setLoading, fetchAllProducts} = useContext(myContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: '',
    price: '',
    productImageUrl: '',
    category: '',
    description: '',
    date: new Date().toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  });

  // Fetch product data from Realtime DB
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(database, `products/${id}`));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProduct(data);
      } else {
        toast.error('Product not found');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load product');
      setLoading(false);
    }
  };

  // Update product in Realtime DB
  const updateProduct = async () => {
    setLoading(true);
    try {
      await set(ref(database, `products/${id}`), product);
      toast.success('Product updated successfully');
     // Wait for toast to finish before navigating
    setTimeout(() => {
        fetchAllProducts();
        navigate('/admin-dashboard');
      }, 1000); // give the toast a moment to show
  
    } catch (error) {
      console.error(error);
      toast.error('Failed to update product');
    }
    setLoading(false);
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);

  return (
    <div className="update-product-page">
      {loading && <Loader />}
      <div className="form-container">
        <h2 className="form-title">Update Product</h2>

        <input
          type="text"
          name="title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          placeholder="Product Title"
          className="form-input"
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Product Price"
          className="form-input"
        />

        <input
          type="text"
          name="productImageUrl"
          value={product.productImageUrl}
          onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
          placeholder="Product Image URL"
          className="form-input"
        />

        <select
          name="category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="form-select"
        >
          <option disabled>Select Product Category</option>
          {categoryList.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          rows="5"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          placeholder="Product Description"
          className="form-textarea"
        ></textarea>

        <button type="button" className="form-button" onClick={updateProduct}>
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProductPage;
