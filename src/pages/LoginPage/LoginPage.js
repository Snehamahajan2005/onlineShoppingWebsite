import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import logo from "../../assests/images/logo.jpg";
import { useState } from "react";
import download from "../../assests/images/download.jpg";


function LoginPage(){
    const[email,setEmail]=useState("@gmail.com");
    return (
        <div className="loginPageBaseContainer">
            <img src={download} alt="pic"/>
            
            <div className="loginPageContentBaseContainer">
        
           
                <div className="loginPageContentTitleContainer">
                    <div className="loginPageContentHeadingContainer"><img src={logo} alt="Login Background"/> 
                 <h2><span style={{color:COLOR.secondaryColor}}>S</span>tyle<span style={{color:COLOR.baseColor}}>W</span>ish
                    </h2>
                    </div>
                 
                    <h1>
                Welcome Back 👋
                    </h1>
                    <h5>Please login to your account </h5>

                </div>
            <div  className="loginPageContentInputContainer">
                <CustomInput type={"email"} placeholder={"Enter Email"} Icon={FaUserAlt} inputValue={email}
                onChangeText={(e) => { 
                     setEmail(e.target.value); }}/>
                <CustomInput type={"password"} placeholder={"Enter Password"} Icon={FaKey} isSecureEntry={true}/>
            

            </div>
            <div className="loginPageContentButtonContainer">
                <button>Log in</button>
            </div>
            <div className="loginPageContentRegisterContainer"></div>

            </div>
            
        </div>
    );
}
export default LoginPage;