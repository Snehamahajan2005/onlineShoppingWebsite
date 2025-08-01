import React, { useContext, useState } from "react";
import registerimg1 from "../../assests/images/registerimg1.jpg" ;
import "./style.css";
import COLOR from "../../config/color";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import logo from "../../assests/images/logo.jpg";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";


import Loader from "../../components/loader/Loader";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password,setPassword]=useState("");
  const [userType,setUserType]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] =useState("Register");
  const context = useContext(myContext);
  const {loading, setLoading } = context;


  const navigate = useNavigate();

  const saveUserDetails = (data) => {
    set(ref(database, `users/${userType}/${data.uid}`), data);
    navigate("/LoginPage");
  };
  const handleLogin = async (e) => {
    navigate("/LoginPage");
  }
  

  const handleRegister = async () => {
    try {
      if (name == "" || email == "" || password == "" || confirmPassword == "" ) {
        //alert("Please fill the fields");
        return toast.error("All fields are required");
      } else if (password != confirmPassword) {
        alert("Password is not matched");
      } else {
        setButtonText("Please Wait...");
        setLoading(true);
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        setButtonText("Register");
        if (response.user.uid) {
          const userData = {
            uid: response.user.uid,
            email: response.user.email,
            name: name,
            password: password,
            userType: userType,
            date: new Date().toLocaleString(
              "en-US",
              {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
              }
          )

          };
          saveUserDetails(userData);
          setLoading(false);
          toast.success("Signup Sucessfully");
        } else {
          alert("Failed to register");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setName("");
          setUserType("");
          setLoading(false);
      }
    }
   } catch (err) {
      setButtonText("Register");
      setEmail("");
      setPassword("");
      setConfirmPassword(""); 
      setName("");
      alert(err);
      setUserType("");
      setLoading(false);
     }
  };
  return (
    <div className="register-container">
      {loading  && <Loader/>}
      <div className="register-box">
        
        {/* Left - Form Section */}
        <div className="register-form">
        <div className="RegisterPageHeadingContainer">
        <img src={logo} alt="logo" className="RegisterPageLogoContainer" />
        <h1 ><span style={{color:COLOR.secondaryColor}}>S</span>tyle<span style={{color:COLOR.baseColor}}>W</span>ish
        </h1>
        </div>
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
              maxLength={8}
            />

            <label>Confirm Password <span>*</span></label>
            <CustomInput
              type={"password"}
              placeholder={"Re-enter your password"}
              Icon={FaKey}
              inputValue={confirmPassword}
              onChangeText={(e) => setConfirmPassword(e.target.value)}
              isSecureEntry={true}
              required={true}
              maxLength={8}
            />
            <select value={userType} onChange={(e)=>setUserType(e.target.value)} className="role-select">
                    <option value="">Register As</option>
                    <option value="Admin">Admin</option>
                    <option value="Customer">Customer</option>
            </select>
          
          <div  className="RegisterPageButtonContainer">
                     <CustomButton 
                     backgroundColor={COLOR.baseColor} color={COLOR.whiteColor} title={buttonText} onClick={handleRegister}/>
                    </div>
                    
           <p>Have any account?<span 
          style={{color:COLOR.baseColor}} onClick={handleLogin}>Login </span> </p>

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
