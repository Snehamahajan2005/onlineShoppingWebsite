// src/components/Navbar.js
import React ,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assests/images/logo.jpg";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
//import SearchBar from "../../components/searchBar/SearchBar";
//import { path } from 'framer-motion/client';

// Combined search data with image
const searchData = [
  { name: 'Fashion', image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg' },
  { name: 'Shirt', image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg' },
  { name: 'Jacket', image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg' },
  { name: 'Mobile', image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg' },
  { name: 'Laptop', image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg' },
  { name: 'Home', image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg' },
  { name: 'Book', image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg' },
];

function Navbar() {
  const navigate = useNavigate();
  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  const userType = user?.userType; 

  // Logout function
  const logout = () => {
    localStorage.removeItem("users");
    navigate("/LoginPage");
  };
  const links = [
    { title: "Home", path: "/home" },
    { title: "All Products", path: "/allproduct" },
    { title: "Signup", path: "/RegisterPage", auth: "guest" },
    { title: "Login", path: "/LoginPage", auth: "guest" },
    { title: "User", path: "/user-dashboard", userType: "Customer" },
    { title: "Admin", path: "/admin-dashboard", userType: "Admin" },
    { title: "Cart(0)", path:"/cart" },
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
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const filterSearchData = searchData.filter(obj =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
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

        {(searchTerm && (filterSearchData.length > 0 || filteredResults.length > 0)) && (
          <ul className="search-results">
            {filterSearchData.map((item, index) => (
              <li key={index} onClick={() => navigate(`/product/${item.name.toLowerCase()}`)}>
                <img src={item.image} alt={item.name} className="search-thumb" />
                {item.name}
              </li>
            ))}
            {filteredResults.map((item) => (
              <li key={item.id} onClick={() => navigate(item.path)}>
                🔗 {item.title}
              </li>
            ))}
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
