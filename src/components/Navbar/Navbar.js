// src/components/Navbar.js
import React ,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assests/images/logo.jpg";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import myContext from "../../context/myContext";

//import SearchBar from "../../components/searchBar/SearchBar";
//import { path } from 'framer-motion/client';


function Navbar() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { allProducts } = context;

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  const userType = user?.userType; 

  // Logout function
  const logout = () => {
    localStorage.removeItem("users");
    navigate("/LoginPage");
  };
   // CartItems
   const cartItems = useSelector((state) => state.cart);

  const links = [
    { title: "Home", path: "/home" },
    { title: "All Products", path: "/allproduct" },
    { title: "Signup", path: "/RegisterPage", auth: "guest" },
    { title: "Login", path: "/LoginPage", auth: "guest" },
    { title: "User", path: "/user-dashboard", userType: "Customer" },
    { title: "Admin", path: "/admin-dashboard", userType: "Admin" },
    { title:  <span>Cart ({cartItems.length})</span>, path:"/cart" },
    { title: "About Us", path: "/about" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  // Handle search input change

  const items = links ;
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    const results = items.filter(item =>
      typeof item.title === "string" && item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };
  

  const filterSearchData =allProducts.filter(obj =>
    obj.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 8);
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
    }
  };

  return (
    <div className="navbarBaseContainer">
      <div className="navbarHeadingContainer">
       <div className='navbarLogoContainer'><img src={logo} alt="logo" />
       
       </div>
        <div className='navbarNameContainer'><h1 ><span style={{color:COLOR.baseColor}}>S</span>tyle<span style={{color:COLOR.secondaryColor}}>W</span>ish
         </h1>
        </div>
         
      </div>
      <div className="NavbarLinkContainer">
      {links.map((item, index) => {
        // Hide guest-only links if user is logged in
        if (item.auth === "guest" && user) return null;

        // Show based on userType if defined
        if (item.userType && item.userType !== userType) return null;

        return (
          <p key={index} onClick={() => navigate(item.path)} className="nav-link">
            {item.icon && <span style={{ marginRight: "6px" }}>{item.icon}</span>}
            {item.title}
          </p>
        );
      })}

      {/* Logout option for logged-in users */}
      {user && (
        <p onClick={logout} className="nav-link cursor-pointer">
          Logout
        </p>
      )}
    </div>
      {/* Integrated Search Bar */}
      <div className="NavbarSearchContanier">
  <form className="search-bar" onSubmit={handleSearchSubmit}>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <button type="submit"><FaSearch /></button>
  </form>

  {searchTerm && (
    <ul className="search-results">
      {/* Product Title Filtered Results */}
      {filterSearchData.map((item, index) => (
        <li key={index} onClick={() => navigate(`/productinfo/${item.id}`)}>
          <img src={item.productImageUrl} alt={item.title} className="search-thumb" />
          {item.title}
        </li>
      ))}

      {/* Route Link Filtered Results */}
      {filteredResults.map((item, index) => (
        <li key={index} onClick={() => navigate(item.path)}>
          🔗 {item.title}
        </li>
      ))}

      {/* If no results */}
      {filterSearchData.length === 0 && filteredResults.length === 0 && (
        <li className="no-results">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
            alt="No results"
            className="search-thumb"
          />
          No results found
        </li>
      )}
    </ul>
  )}
</div>

      <div className="NavbarProfileContainer">
        <FaCircleUser size={40} color={COLOR.whiteColor} />
      </div>
      
    </div>
    
  );
}

export default Navbar;
