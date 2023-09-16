import "./InputBox.css";

export  default function InputBox(){
    return(
        <div className="inputbox">
            <img src="https://img.icons8.com/?size=2x&id=676&format=png" className="emoji" />
            <img src="https://img.icons8.com/?size=2x&id=3220&format=png" className="plus" />
            <input type="text"  className="text-input"/>
            <img src="https://img.icons8.com/?size=2x&id=85796&format=png" className="plus" />
            <button>Send</button>
        </div>
    )
}