// src/components/Navbar.js
import React ,{useState} from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSignOutAlt,FaSearch } from 'react-icons/fa';
import "./Navbar.css";
import logo from "../../assests/images/logo.jpg";
import COLOR from "../../config/color";


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search Term:", e.target.value); // You can use this to filter your data
  };

  // Handle form submission (if needed)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // You can add your search logic here
  };
  return (
    <nav className="navbar">
      <div className="navbarheading">
       <div className='navbarlogo'><img src={logo} alt="logo" /></div>
         <div className='navbarname'><h1 ><span style={{color:COLOR.baseColor}}>S</span>tyle<span style={{color:COLOR.secondaryColor}}>W</span>ish
         </h1></div>
         
      </div>
      <ul className="nav-links">
        <li><a href="/"><FaHome /> Home</a></li>
        <li><a href="/profile"><FaUser /> Profile</a></li>
        <li><a href="/cart"><FaShoppingCart /> Cart</a></li>
        <li><a href="/logout"><FaSignOutAlt /> Logout</a></li>
      </ul>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit"><FaSearch /></button>
      </form>
    </nav>
  );
};

export default Navbar;
