// src/components/Navbar.js
import React ,{useState} from 'react';
import { FaHome, FaUser, FaShoppingCart,FaSearch } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assests/images/logo.jpg";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

function Navbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" , icon: "<FaHome />" },
    { title: "All Products", path: "/product",icon :<FaShoppingCart /> },
    { title: "Signup", path: "/RegisterPage" },
    { title: "Login", path: "/LoginPage" },
    { title: "Cart(0)", path:"/cart" ,icon :<FaShoppingCart /> },
    { title: "About Us", path: "/about" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  // Handle search input change

  const items = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "All Products", path: "/product" },
    { id: 3, title: "Cart", path: "/cart" },
    { id: 4, title: "About Us", path: "/about" },
    { id:5, title: "Signup", path: "/RegisterPage" },
    { id:6, title: "Login", path: "/LoginPage" },
  
  ];
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
   // You can use this to filter your data
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Filter items based on searchTerm
    const results = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredResults(results);
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
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
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
       {filteredResults.length > 0 && (
                    <ul className="search-results">
                        {filteredResults.map((item) => (
                            <li key={item.id} onClick={() => navigate(item.path)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}
      </div>
      
      <div className="NavbarProfileContainer">
        <FaCircleUser size={40} color={COLOR.whiteColor} />
      </div>
      <div>
      {/* Search Bar  */}
     <SearchBar />
    </div>
    </div>
    
  );
}

export default Navbar;
