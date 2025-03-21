import "./App.css";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/HomePage/pages/LandingPage/LandingPage";
import AboutPage from "./pages/HomePage/pages/AboutPage/AboutPage";
import ProductPage from "./pages/HomePage/pages/ProductPage/ProductPage";
import CartPage from "./pages/HomePage/pages/CartPage/CartPage";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/LoginPage" Component={LoginPage}/>
      <Route path="/RegisterPage" element={<RegisterPage/>}/>

    </Routes>
  
    </BrowserRouter>
  );
}
export default App;

