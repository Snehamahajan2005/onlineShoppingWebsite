import "./App.css";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/HomePage/pages/LandingPage/LandingPage";
//import AboutPage from "./pages/HomePage/pages/AboutPage/AboutPage";
//import ProductPage from "./pages/HomePage/pages/ProductPage/ProductPage";
//import CartPage from "./pages/HomePage/pages/CartPage/CartPage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import UserDashboard from  "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/Admindashboard/AdminDashboard";
import AddProductPage  from "./pages/admin/AddProductPage/AddProductPage";
import UpdateProductPage  from "./pages/admin/UpdateProductPage/UpdateProductPage";
import About from "./pages/About/About";
import MyState from "./context/myState";
import {Toaster} from "react-hot-toast";
import  ProtectedRouteForUser  from "./protectedRoute/ProtectedRouteForUser";
import  ProtectedRouteForAdmin  from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";

function App(){
  return(
   <MyState>
     <BrowserRouter>
     <ScrollTop/>
     <Routes>
      <Route path="/" element={<HomePage/>}>
          <Route path="/home" element={<LandingPage />} />
          
          
      </Route>
      <Route path="/LoginPage" Component={LoginPage}/>
      <Route path="/RegisterPage" element={<RegisterPage/>}/>
      <Route path="/*" element={<NoPage/>}/>
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/allproduct" element={<AllProduct/>}/>
      <Route path="/category/:categoryname" element={<CategoryPage />} /> 
      <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
      <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
      <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
      <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
      <Route path="/about" element={<About/>} />
      
      

     </Routes>
     <Toaster/>
     </BrowserRouter>
   
    </MyState>
  );
}
export default App;

