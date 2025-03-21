// src/components/Navbar.js
import React ,{useState} from 'react';
import { FaHome, FaUser, FaShoppingCart,FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assests/images/logo.jpg";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" , icon: "<FaHome />" },
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/product",icon :<FaShoppingCart /> },
    { title: "cart", path:"/cart" ,icon :<FaShoppingCart /> },
  ];

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
    <div className="navbarBaseContainer">
      <div className="navbarHeadingContainer">
       <div className='navbarLogoContainer'><img src={logo} alt="logo" /></div>
         <div className='navbarNameContainer'><h1 ><span style={{color:COLOR.baseColor}}>S</span>tyle<span style={{color:COLOR.secondaryColor}}>W</span>ish
         </h1></div>
         
      </div>
      <div className="NavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
      <div className="NavbarSearchContainer">
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit"><FaSearch /></button>
      </form>
      </div>
      
      <div className="NavbarProfileContainer">
        <FaCircleUser size={40} color={COLOR.blackColor} />
      </div>
    </div>
  );
}

export default Navbar;
