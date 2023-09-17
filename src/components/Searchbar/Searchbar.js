import Imgsearch from "./Searchbar-Image/search.png";

import './Searchbar.css';

export default function Searchbar() {
    return (
        <div className="Searchbar-div">
            <div><input className="box" />
            </div>
            <div>
                <img src={Imgsearch} className="Imgsearch" />
            </div>
        </div>
    )
}