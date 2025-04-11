// eslint-disable-next-line react/prop-types
import { Navigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  // Check if user is logged in and has userType "Admin"
  if (user?.userType === "Admin") {
    return children;
  } else {
    return <Navigate to="/LoginPage" />;
  }
};

export default ProtectedRouteForAdmin;
