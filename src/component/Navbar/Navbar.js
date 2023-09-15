import Imgwhatsapp from "./../Navbar/Navbar-Image/whatsapp.png";
import Imgsearch from "./../Navbar/Navbar-Image/search.png";
import Button from './../Button/Button';
import Imgmenu from "./../Navbar/Navbar-Image/menu.png";


import "./Navbar.css";

export default function Navbar() {
   return (
      <div className="nav-container">
         <div className="nav-subcontainer">
            <img src={Imgwhatsapp} alt="searchicon" className="img-1" />
            <img src={Imgsearch} alt="searchicon" className="img-2" />
         </div>
         <div className="btn">
            <Button text="Log Out" />
         </div>
         <div>
            <img src={Imgmenu} alt="searchicon" className="img-3" />


         </div>
      </div>
   )
}
