/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Testimonial.css';

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
                src="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <p className="testimonial-text">
                "I am absolutely delighted with my purchase. The product quality is outstanding and the delivery was incredibly fast.Shopping here is always a delight.This is now my go-to online store!"
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Alex Johnson</h2>
              <p className="testimonial-role">Frequent Shopper</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="testimonial-card-inner">
              <img
                alt="testimonial"
                className="testimonial-image"
                src="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <p className="testimonial-text">
                "The website is incredibly user-friendly and the customer support is top-notch. I always find exactly what I need, and my shopping experience is seamless every time."
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Sarah Williams</h2>
              <p className="testimonial-role">Satisfied Customer</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="testimonial-card-inner">
              <img
                alt="testimonial"
                className="testimonial-image"
                src="https://randomuser.me/api/portraits/men/65.jpg"
              />
              <p className="testimonial-text">
                "From the wide selection to the easy checkout process, every step was a breeze. I'm a loyal customer now and couldn't be happier with the overall experience!"
              </p>
              <span className="testimonial-divider"></span>
              <h2 className="testimonial-name">Michael Smith</h2>
              <p className="testimonial-role">Loyal Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
