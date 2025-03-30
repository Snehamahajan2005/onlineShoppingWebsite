import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import "./style.css";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className="main-content">
        {children}
      </div>
      <Footer/>

      
    </div>
  )
}

export default Layout
