import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <a className="footer-logo" onClick={handleNavigate} style={{ cursor: "pointer" }}>
          <span>StyleWish</span>
        </a>
        {/* Text */}
        <p className="footer-text">
          © 2025 StyleWish —{" "}
          <span 
            className="footer-link" 
            onClick={handleNavigate} 
            style={{ cursor: "pointer" }}
          >
            @stylewish
          </span>
        </p>
        {/* Social Icons */}
        <span className="footer-social">
          <a className="footer-icon" href="#">
            <FaFacebookF />
          </a>
          <a className="footer-icon" href="#">
            <FaTwitter />
          </a>
          <a className="footer-icon" href="#">
            <FaInstagram />
          </a>
          <a className="footer-icon" href="#">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
