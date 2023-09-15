
import Imgsearch from "./../Navbar/Navbar-Image/search.png";
import Imgmenu from "./../Navbar/Navbar-Image/menu.png";


import "./Navbar.css";

export default function Navbar() {
   return (
      <div className="nav-container">

       <h1> MSG-me</h1>
         <div className="menu-item">
            <img src={Imgsearch} alt="searchicon" className="icon" />
            <img src={Imgmenu} alt="searchicon" className="icon" />
            </div>
      </div>
   )
}
