import React, { useContext , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import "./CategoryPage.css"; // Importing CSS
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const CategoryPage = () => {
  const { categoryname } = useParams();
  const navigate = useNavigate();
  const { allProducts, loading } = useContext(myContext);

  // Filter products by category
  const filteredProducts = allProducts.filter((product) =>
    product.category.includes(categoryname)
  );
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Add item to cart
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart");
  };

  // Remove item from cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from cart");
  };

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <Layout>
      <div className="category-page">
        {/* Category Title */}
        <h1 className="category-title">{categoryname}</h1>

        {loading ? (
          // Show loader while loading
          <div className="center-content">
            <Loader />
          </div>
        ) : (
          <section className="product-section">
            <div className="product-container">
              <div className="product-grid">
                {filteredProducts.length > 0 ? (
                  // Show filtered products
                  filteredProducts.map((item, index) => {
                    const { id, title, price, productImageUrl } = item;
                    return (
                      <div key={index} className="product-card">
                        <div
                          className="product-box"
                          onClick={() => navigate(`/productinfo/${id}`)}
                        >
                          <img
                            src={productImageUrl}
                            alt="product"
                            className="product-image"
                          />
                          <div className="product-info">
                            <p className="product-brand">StyleWish</p>
                            <h2 className="product-title">
                              {title.substring(0, 25)}
                            </h2>
                            <p className="product-price">₹{price}</p>
                            
                                {/* Conditional Add/Delete from Cart */}
                 <div className="button-wrapper">
                  {cartItems.some((p) => p.id === item.id) ? (
                    <button
                      onClick={() => deleteCart(item)}
                      className="delete-button"
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(item)}
                      className="add-button"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Show message if no product found
                  <div className="no-product-box">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                      alt="not-found"
                      className="not-found-img"
                    />
                    <h2>No {categoryname} product found</h2>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
