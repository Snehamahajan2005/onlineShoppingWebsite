/* eslint-disable react/prop-types */
// MyState.js
import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { ref, onValue } from 'firebase/database';
import { database } from "../firebase/firebase";


function MyState({ children }) {
  // Loading state
  const [loading, setLoading] = useState(false);

  // Product state to store all products
  const [allProducts, setAllProducts] = useState([]);

  // Fetch all products from Realtime Database
  const fetchAllProducts = () => {
    setLoading(true);

    const productRef = ref(database, 'products');

    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      const productArray = [];

      if (data) {
        Object.keys(data).forEach((key) => {
          productArray.push({ ...data[key], id: key });
        });
      }

      setAllProducts(productArray);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };

  // Run on component mount
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
      allProducts ,
      fetchAllProducts
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
