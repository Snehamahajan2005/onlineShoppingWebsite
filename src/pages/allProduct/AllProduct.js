import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "./AllProduct.css"; // Importing the CSS file

// Product data
const productData = [
    {
        id: 1,
        image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        price: 150,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
        title: "Kaushalam kalash Copper Pot",
        price: 120,
    },
    {
        id: 3,
        image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        price: 130,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        price: 120,
    },
];

const AllProduct = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="products-container">
                {/* Page Heading */}
                <h1 className="products-heading">All Products</h1>

                {/* Products List */}
                <section className="products-grid">
                    {productData.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                                onClick={() => navigate("/productinfo")}
                            />
                            <div className="product-info">
                                <h2 className="product-brand">E-bharat</h2>
                                <h3 className="product-title">
                                    {product.title.substring(0, 25)}
                                </h3>
                                <h3 className="product-price">₹{product.price}</h3>

                                <button className="add-to-cart-btn">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    );
};

export default AllProduct;

