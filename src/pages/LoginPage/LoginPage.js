import React, { useState, useContext } from "react";
import { FaUserAlt, FaKey } from "react-icons/fa";
import CustomInput from "../../components/CustomInput/CustomInput";
import logo from "../../assests/images/logo.jpg";
import "./style.css";
import sittingboy from "../../assests/images/sittingboy.png";
import COLOR from "../../config/color";
import CustomButton from "../../components/CustomButton/CustomButton";
import { motion } from "framer-motion";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { ref, set, get } from "firebase/database"; // ✅ Added missing import
import ErrorMessage from "../../components/errormessage/ErrorMessage";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Login");
  const [userType, setUserType] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const [error, setError] = useState("");

  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const saveUserDetails = (data) => {
    set(ref(database, `users/${userType}/${data.uid}`), data);
    localStorage.setItem("users", JSON.stringify(data));
  };

  const handleRegister = () => {
    navigate("/RegisterPage");
  };

  const handleLogin = async () => {
    if (email === "" || password === "" || userType === "") {
      setError("Please fill all fields");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setButtonText("Please Wait...");
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const userId = response.user.uid;
      const userRef = ref(database, `users/${userType}/${userId}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        saveUserDetails(userData);
        toast.success("Login Successfully");

        if (userType === "Customer") {
          navigate("/user-dashboard");
        } else {
          navigate("/admin-dashboard");
        }
      } else {
        setError("User not found in database");
        setTimeout(() => setError(""), 2000);
        setEmail("");
        setPassword("");
        setUserType("");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
      setTimeout(() => setError(""), 2000);
      setEmail("");
      setPassword("");
      setUserType("");
    }

    setButtonText("Login");
    setLoading(false);
  };

  return (
    <div className={`loginPageBaseContainer ${isDarkMode ? "dark-mode" : "light"}`}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="loginPageContentContainer"
      >
        {/* Left Image Section */}
        <div className="loginPageImageContainer">
          <img src={sittingboy} alt="sittingBoyImage" />
        </div>

        {/* Right Form Section */}
        <div className="loginPageInputFormContainer">
          {loading && <Loader />}

          <div className="toggle-container">
            <label className="toggle-label">Dark Mode</label>
            <ToggleSwitch isChecked={isDarkMode} onToggle={toggleDarkMode} />
          </div>

          <div className="loginPageHeadingContainer">
            <img src={logo} alt="logo" className="LoginPageLogoContainer" />
            <h1>
              <span style={{ color: COLOR.secondaryColor }}>S</span>tyle
              <span style={{ color: COLOR.baseColor }}>W</span>ish
            </h1>
          </div>

          <p className="loginPageTitleContainer">Log In Here!</p>
          <h4 className="loginPageWelcomeContainer">{`Welcome ${email}`}</h4>
          <ErrorMessage message={error} />

          <div className="LoginPageinputContainer">
            <label>
              Email <span>*</span>
            </label>
            <CustomInput
              type="email"
              placeholder="Enter your email"
              Icon={FaUserAlt}
              inputValue={email}
              onChangeText={(e) => setEmail(e.target.value)}
              required
            />

            <label>
              Password <span>*</span>
            </label>
            <CustomInput
              type="password"
              placeholder="Enter your password"
              Icon={FaKey}
              inputValue={password}
              isSecureEntry={true}
              required
              onChangeText={(e) => setPassword(e.target.value)}
              maxLength={8}
            />

            <label>
              Select Role <span>*</span>
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="role-select"
              required
            >
              <option value="">Log in As</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
            </select>
          </div>

          <div className="loginPageButtonContainer">
            <CustomButton
              backgroundColor={COLOR.baseColor}
              color={COLOR.whiteColor}
              title={buttonText}
              onClick={handleLogin}
            />
          </div>

          <p>
            Don&apos;t have an account?
            <span style={{ color: COLOR.baseColor }} onClick={handleRegister}>
              {" "}
              Register
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
