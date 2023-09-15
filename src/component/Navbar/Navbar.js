import Imgwhatsapp from "./../Navbar/Navbar-Image/whatsapp.png";
import Imgsearch from "./../Navbar/Navbar-Image/search.png";
import Button from './../Button/Button';
import Imgmenu from "./../Navbar/Navbar-Image/menu.png";


import "./Navbar.css";

export default function Navbar() {
   return (
      <div className="nav-container">

         <img src={Imgwhatsapp} alt="searchicon" className="img-1" />
         <div className="menu-item">
            <img src={Imgsearch} alt="searchicon" className="icon" />
            <img src={Imgmenu} alt="searchicon" className="icon" />
            </div>
      </div>
   )
}
