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


function LoginPage() {
    const [email, setEmail] = useState("@gmail.com");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
                        isSecureEntry={true}
                        required={true}
                     />
                     <select className="role-select">
                     <option value="default">Log in As</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                </select>
                
                 </div>

                   <div  className="loginPageButtonContainer">
                     <CustomButton 
                     backgroundColor={COLOR.baseColor} color={COLOR.whiteColor} title={"Log in"} onClick={() => alert(`${email} login successfully`)}/>
                  </div>
                </div>  
            </motion.div>  
            
            
        </div>
    );
}
export default LoginPage;
    
