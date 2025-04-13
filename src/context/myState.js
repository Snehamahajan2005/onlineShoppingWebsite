/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { ref, onValue, remove } from 'firebase/database';
import { database } from "../firebase/firebase";
import toast from 'react-hot-toast';

function MyState({ children }) {
  // Loading state
  const [loading, setLoading] = useState(false);

  // Products state
  const [allProducts, setAllProducts] = useState([]);

  // Orders state
  const [allOrders, setAllOrders] = useState([]);

  // Users state
  const [allUsers, setAllUsers] = useState([]);

  /**========================================================================
   *                          Fetch All Products (Realtime DB)
   *========================================================================**/
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
      console.error('Error fetching products:', error);
      setLoading(false);
    });
  };

  /**========================================================================
   *                          Fetch All Orders (Realtime DB)
   *========================================================================**/
  const fetchAllOrders = () => {
    setLoading(true);
    const orderRef = ref(database, 'orders');

    onValue(orderRef, (snapshot) => {
      const data = snapshot.val();
      const orderArray = [];

      if (data) {
        Object.keys(data).forEach((key) => {
          orderArray.push({ ...data[key], id: key });
        });
      }

      setAllOrders(orderArray);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching orders:', error);
      setLoading(false);
    });
  };

  /**========================================================================
   *                          Fetch All Users (Realtime DB)
   *========================================================================**/
  const fetchAllUsers = () => {
    setLoading(true);
    const userRef = ref(database, 'users');
  
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
  
      if (data) {
        Object.keys(data).forEach((roleKey) => {
          const usersByRole = data[roleKey]; // Admin, Customer, etc.
  
          Object.keys(usersByRole).forEach((userKey) => {
            const userData = usersByRole[userKey];
            userArray.push({
              ...userData,
              role: userData.userType || roleKey, // fallback to role key if needed
            });
          });
        });
      }
  
      setAllUsers(userArray); // now correctly sets all users
      setLoading(false);
    }, (error) => {
      console.error('Error fetching users:', error);
      setLoading(false);
    });
  };
  
  console.log(fetchAllUsers);

  /**========================================================================
   *                          Delete Order Function
   *========================================================================**/
  const deleteOrder = async (id) => {
    setLoading(true);
    try {
      await remove(ref(database, `orders/${id}`));
      toast.success('Order deleted successfully');
      fetchAllOrders(); // Refresh orders
      setLoading(false);
    } catch (error) {
      console.error('Error deleting order:', error);
      setLoading(false);
    }
  };

  // Fetch all data on component mount
  useEffect(() => {
    fetchAllProducts();
    fetchAllOrders();
    fetchAllUsers();
  }, []);

  return (
    <MyContext.Provider value={{
      loading,
      setLoading,
      allProducts,
      fetchAllProducts,
      allOrders,
      fetchAllOrders,
      deleteOrder,
      allUsers,
      fetchAllUsers
    }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
