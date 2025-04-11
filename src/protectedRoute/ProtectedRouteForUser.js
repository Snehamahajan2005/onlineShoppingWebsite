// eslint-disable-next-line react/prop-types
import { Navigate } from "react-router-dom";

const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  // Check if user is logged in and has userType "Customer"
  if (user?.userType === "Customer") {
    return children;
  } else {
    return <Navigate to="/LoginPage" />;
  }
};

export default ProtectedRouteForUser;
