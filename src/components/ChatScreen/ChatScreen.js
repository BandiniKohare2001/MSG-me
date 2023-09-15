import "./ChatScreen.css";
import ChatNav from "../ChatNav/ChatNav"
import InputBox from "../InputBox/InputBox"


export default function  ChatScreen(){
    return(
        <><div className="main-container">
            <div>
                
            </div>
        <div className="chatsreen">
        <ChatNav imgUrl="https://pps.whatsapp.net/v/t61.24694-24/375852712_968357537564906_1198883397977467806_n.jpg?ccb=11-4&oh=01_AdRyqnZsnlOtE52wz7hEKelng6Lxquw0HJp4fXJaE6wKJQ&oe=65112A7F&_nc_sid=000000&_nc_cat=111" name="Bandini Kohare" />
        <div className="message-div"></div>
        <InputBox />
        </div>
        </div>
        </>
     
    )
}