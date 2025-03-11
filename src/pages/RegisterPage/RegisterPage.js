import React, { useState } from "react";
import registerimg1 from "../../assests/images/registerimg1.jpg" ;
import "./style.css";
import COLOR from "../../config/color";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { FaUserAlt, FaKey } from "react-icons/fa";
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const[password,setPassword]=useState("");
  const handleRegister=async() => {
    await createUserWithEmailAndPassword(auth,email,password);
  };
  return (
    <div className="register-container">
      <div className="register-box">
        
        {/* Left - Form Section */}
        <div className="register-form">
          <h2>Create an Account</h2>
           <p>Register Here!</p>

          
            <label>Full Name <span>*</span></label>
            <CustomInput
              type={"text"}
              placeholder={"Enter your name"}
              inputValue={name}
              onChangeText={(e)=>setName(e.target.value)}
              required={true}
            />

            <label>Email <span>*</span></label>
            <CustomInput
              type={"email"}
              placeholder={"Enter your email"}
              Icon={FaUserAlt}
              inputValue={email}
              onChangeText={(e) => setEmail(e.target.value)}
              required={true}
            />

            <label>Password <span>*</span></label>
            <CustomInput
              type={"password"}
              placeholder={"Enter your password"}
              Icon={FaKey}
              inputValue={password}
              onChangeText={(e)=>setPassword(e.target.value)}
              isSecureEntry={true}
              required={true}
            />

            <label>Confirm Password <span>*</span></label>
            <CustomInput
              type={"password"}
              placeholder={"Re-enter your password"}
              Icon={FaKey}
              isSecureEntry={true}
              required
            />
          
                  <div  className="RegisterPageButtonContainer">
                     <CustomButton 
                     backgroundColor={COLOR.baseColor} color={COLOR.whiteColor} title={"Create Account"} onClick={handleRegister}/>
                    </div>
        </div>
        {/* Right - Image Section */}
        <div className="register-image">
          <img src={registerimg1} alt="registerImage" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
