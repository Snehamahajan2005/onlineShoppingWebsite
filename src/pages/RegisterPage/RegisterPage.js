import React, { useState } from "react";
import boy from "../../assests/images/boy.png" ;
import "./style.css";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register-container">
      <div className="register-box">
        
        {/* Left - Form Section */}
        <div className="register-form">
          <h2>Create an account</h2>
          <p>Register Here!</p>

          <form>
            <label>Full Name <span>*</span></label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email <span>*</span></label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password <span>*</span></label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm Password <span>*</span></label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          <p className="signin-text">Already have an account? <span>Sign In</span></p>
        </div>

        {/* Right - Image Section */}
        <div className="register-image">
          <img src={boy} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
