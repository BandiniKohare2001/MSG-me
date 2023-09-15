import "./ChatNav.css";
import Search from "./img/search.png"
import Menu from "./img/menu.png"

export default function  ChatNav({imgUrl, name, title}){
    return(
        <div className="chatnav">
            <img src={imgUrl} alt={title} className="profile-img"/>
            <h2>{name}</h2>

            <h1><i class="fa-solid fa-magnifying-glass"></i></h1>
            <div className="icon-div">
           <img src={Search} alt="search icon" className="icons"/>
           

        </div>
        </div>
    )
}