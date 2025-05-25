/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Testimonial.css';
import harsh from "../../assests/images/harsh.jpg";
import taniya from "../../assests/images/taniya.jpg";
import sneha from "../../assests/images/sneha.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h1 className="testimonial-heading">Testimonial</h1>
        <h2 className="testimonial-subheading">
          What our <span className="testimonial-highlight">customers</span> are saying
        </h2>

        <div className="testimonial-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="testimonial-card-inner">
              <img
                alt="testimonial"
                className="testimonial-image"
                src={harsh}
              />
              <p className="testimonial-text">
                "I am absolutely delighted with my purchase. The product quality is outstanding and the delivery was incredibly fast.Shopping here is always a delight.This is now my go-to online store!"
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Harsh Mahajan</h2>
              <p className="testimonial-role">Frequent Shopper</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="testimonial-card-inner">
              <img
                alt="testimonial"
                className="testimonial-image"
                src={taniya}
              />
              <p className="testimonial-text">
                "The website is incredibly user-friendly and the customer support is top-notch. I always find exactly what I need, and my shopping experience is seamless every time."
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Taniya</h2>
              <p className="testimonial-role">Satisfied Customer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="testimonial-card-inner">
              <img
                alt="testimonial"
                className="testimonial-image"
                src={sneha}
              />
              <p className="testimonial-text">
                "From the wide selection to the easy checkout process, every step was a breeze. I'm a loyal customer now and couldn't be happier with the overall experience!"
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Sneha Mahajan</h2>
              <p className="testimonial-role">Loyal Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
