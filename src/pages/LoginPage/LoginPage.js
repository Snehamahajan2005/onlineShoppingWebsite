import React, { useState } from "react";
import { FaUserAlt, FaKey } from "react-icons/fa";
import CustomInput from "../../components/CustomInput/CustomInput";
import logo from "../../assests/images/logo.jpg";
import "./style.css"; // Ensure you link your CSS file
import sittingboy from "../../assests/images/sittingboy.png";
import COLOR from "../../config/color";
import CustomButton from "../../components/CustomButton/CustomButton";
import { motion } from 'framer-motion';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import ErrorMessage from '../../components/errormessage/ErrorMessage';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [buttonText, setButtonText] =useState("Login");
    const [userType,setUserType]=useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    
    const saveUserDetails = (data) => {
        set(ref(database, `users/${userType}/${data.uid}`), data);
        navigate("/");
      };
    
      const handleLogin = async () => {
        try {
          if (email == "" || password == "" ) {
            setError("Please fill the fields"); // Show error message
            setTimeout(() => setError(""), 2000);
        return;
    }
            setButtonText("Please Wait...");
            const response = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            setButtonText("Login");
            if (response.user.uid) {
              const userData = {
                uid: response.user.uid,
                email: response.user.email,
        
              };
              saveUserDetails(userData);
            } else {
              setError("Failed to Login"); // Show error message
              setTimeout(() => setError(""), 2000); // Auto-clear after 2 seconds
              setEmail("");
              setPassword("");
              setUserType("");
            }
          
        } catch (err) {
          setButtonText("Login");
          setEmail("");
          setPassword("");
          setError("Login failed. Please try again."); // Show error message
          setTimeout(() => setError(""), 2000); // Auto-clear after 2 seconds
          setUserType("");
          console.error(err); // Log the error to see what went wrong
        }
      };

    return (
        <div className={`loginPageBaseContainer ${isDarkMode ? 'dark-mode' : 'light'}`}>
    
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="loginPageContentContainer">
                {/* Left Side - Image */}
                <div className="loginPageImageContainer">
                    <img src={sittingboy} alt="sittingBoyImage" />
                </div>

                {/* Right Side - Login Form */}
                <div className="loginPageInputFormContainer">
                <div className="toggle-container">
                    <label className="toggle-label">Dark Mode</label>
                    <ToggleSwitch isChecked={isDarkMode} onToggle={toggleDarkMode} />
                </div>
                   <div className="loginPageHeadingContainer">

                   

                      <img src={logo} alt="logo" className="LoginPageLogoContainer" />
                      <h1 ><span style={{color:COLOR.secondaryColor}}>S</span>tyle<span style={{color:COLOR.baseColor}}>W</span>ish
                       </h1>
                    </div>
                
                    <p className="loginPageTitleContainer">Log In Here!</p>
                    <h4 className="loginPageWelcomeContainer">{`Welcome ${email}`}</h4>
                    <ErrorMessage message={error} />
                 
                
                 

                 <div className="LoginPageinputContainer">
                     <CustomInput
                        type={"email"}
                        placeholder={"Enter your email"}
                        Icon={FaUserAlt}
                        inputValue={email}
                        onChangeText={(e) => setEmail(e.target.value)}
                        required={true}
                     />
                     <CustomInput
                        type={"password"}
                        placeholder={"Enter your password"}
                        Icon={FaKey}
                        inputValue={password}
                        isSecureEntry={true}
                        required={true}
                        onChangeText={(e) => setPassword(e.target.value)}
                        maxLength={8}
                     />
                     <select value={userType} onChange={(e)=>setUserType(e.target.value)}className="role-select">
                     <option value="">Log in As</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
                </select>
                
                 </div>

                   <div  className="loginPageButtonContainer">
                     <CustomButton 
                     backgroundColor={COLOR.baseColor} color={COLOR.whiteColor} title={buttonText} 
                     onClick={handleLogin}/>
                  </div>
                </div>  
                {/* <p>Don't have an account?Register</p> */}
            </motion.div>  
            
            
        </div>
    );
}
export default LoginPage;
    
