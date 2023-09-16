import Imgwhatsapp from "./../Navbar/Navbar-Image/whatsapp.png";
import Imgsearch from "./../Navbar/Navbar-Image/search.png";
import Imgmenu from "./../Navbar/Navbar-Image/menu.png";

import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="nav-container">
            <div class="container-1">
                <div className="logo" >
                    <img src={Imgwhatsapp} alt="whatsapp-logo" className="img-1" />
                </div>
                <div className="menu-item">
                    <img src={Imgmenu} alt="searchicon" className="icon" />
                </div>
            </div>
            <div className="searchbar">
                <input class="inputbox"></input>
                <img src={Imgsearch} alt="searchicon" className="searchicon" />
            </div>
        </div>

    )
}
