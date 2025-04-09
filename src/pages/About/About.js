import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "../../components/layout/Layout";
import image2 from "../../assests/images/image2.jpg";
import image3 from "../../assests/images/image3.jpg";
import image5 from "../../assests/images/image5.jpg";
import image6 from "../../assests/images/image6.webp";
import image7 from "../../assests/images/image7.webp";

const About = () => {
  const customerImages = [
    image2, image3, image5, image6, image7
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
 <Layout>
    <div className="about-container">
      {/* Section 1: Introduction with Framer Motion */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Our Shop</h1>
        <p>Your favorite destination for quality products and seamless shopping experience.</p>
      </motion.div>

      {/* Section 2: Features with Motion Fade */}
      <motion.div
        className="about-features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="feature-box">
          <h2>Wide Range of Products</h2>
          <p>We offer an extensive selection of items to suit all your needs.</p>
        </div>
        <div className="feature-box">
          <h2>Secure Payment</h2>
          <p>Experience smooth and secure transactions with multiple payment options.</p>
        </div>
        <div className="feature-box">
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered quickly and efficiently to your doorstep.</p>
        </div>
      </motion.div>

      {/* Section 3: Feedback Slider */}
      <div className="feedback-section">
        <h2>Happy Customers</h2>
        <Slider {...sliderSettings}>
          {customerImages.map((img, idx) => (
            <div key={idx} className="feedback-slide">
              <img src={img} alt={`Customer ${idx + 1}`} className="customer-image"/>
              <p>Customer {idx + 1}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Section 4: Video Display */}
      <div className="video-section">
        <h2>Why Shop Online?</h2>
        <div className="video-wrapper">
          <iframe
            width="100%"
              height="400"
               src="https://www.youtube.com/embed/Ixc7UxrA4Cs"
                title="7 Surprising Tips for Creating the Ultimate Online Shopping Experience"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    
    
 </Layout>
  );
};

export default About;
