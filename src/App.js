import "./App.css";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/HomePage/pages/LandingPage/LandingPage";
import AboutPage from "./pages/HomePage/pages/AboutPage/AboutPage";
//import ProductPage from "./pages/HomePage/pages/ProductPage/ProductPage";
//import CartPage from "./pages/HomePage/pages/CartPage/CartPage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import UserDashboard from  "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard"

function App(){
  return(
    
    <BrowserRouter>
    <ScrollTop/>
    <Routes>
      <Route path="/" element={<HomePage/>}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          
      </Route>
      <Route path="/LoginPage" Component={LoginPage}/>
      <Route path="/RegisterPage" element={<RegisterPage/>}/>
      <Route path="/*" element={<NoPage/>}/>
      <Route path="/productinfo" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/allproduct" element={<AllProduct/>}/>
      <Route path="/user-dashboard" element={<UserDashboard/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      

    </Routes>
  
    </BrowserRouter>
    

  );
}
export default App;

