import "./App.css";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/LoginPage" Component={LoginPage}/>
      <Route path="/RegisterPage" element={<RegisterPage/>}/>

    </Routes>
  
    </BrowserRouter>
  );
}
export default App;

