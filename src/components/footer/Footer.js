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
          <a className="footer-icon" target="_blank" href="https://www.instagram.com/u_n_k_n_o_w_n_2_0?igsh=Mmt3aHc2dWhybWs4">
            <FaInstagram />
          </a>
          <a className="footer-icon" target="_blank" href="https://www.linkedin.com/in/sneha-mahajan-9947a4348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
