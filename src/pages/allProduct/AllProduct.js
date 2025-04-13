import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./AllProduct.css"; // Importing the CSS file
import { useContext ,  useEffect} from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const AllProduct = () => {
    const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading , allProducts} = context;
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
            <div className="products-container">
                {/* Page Heading */}
                <h1 className="products-heading">All Products</h1>
                <div className="loader">{loading && <Loader/>} </div>

                {/* Products List */}
                <section className="products-grid">
                    {allProducts.map((item,index) =>{
                         const { id, title, price,productImageUrl } = item;
                    return (
                        <div key={index} className="product-card">
                            <div className="product-image-wrapper">
                            <img
                                src={productImageUrl}
                                alt={title}
                                className="product-image"
                                onClick={() => navigate(`/productinfo/${id}`)}
                            />
                                </div>
                            <div className="product-info">
                                <h2 className="product-brand">E-bharat</h2>
                                <h3 className="product-title">
                                    {title.substring(0, 25)}
                                </h3>
                                <h3 className="product-price">₹{price}</h3>

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
                    )
                }
                    )}
                </section>
            </div>
        </Layout>
    );
};


export default AllProduct;

