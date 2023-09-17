import "./ChatScreen.css";
import ChatNav from "../ChatNav/ChatNav"
import InputBox from "../InputBox/InputBox"
import Navbar from "../Navbar/Navbar"
import Contact from "../Contact/Contact";
import Searchbar from "./../Searchbar/Searchbar";


export default function ChatScreen() {
    return (
        <><div className="main-container">
            <div>
                <Navbar />
                <Searchbar />
                <Contact userImg={"https://avatars.githubusercontent.com/u/139730268?v=4"} name="sejal kakade" lastseen="10:23pm" />
                <Contact userImg="https://avatars.githubusercontent.com/u/124554439?s=96&v=4" name="Bandini Kohare" lastseen="10:23pm" />
                <Contact userImg={"https://avatars.githubusercontent.com/u/63898276?v=4"} name="Harshvardhan khairnar" lastseen="10:23pm" />
                <Contact userImg={"https://media.licdn.com/dms/image/D4E03AQET4jPj4yYzmw/profile-displayphoto-shrink_100_100/0/1691679310382?e=1700092800&v=beta&t=1tvPoYBNjS5YJ5UTJ04gRDTAHgcsG5obzm6DyLvlWXw"} name="Samiksha shahare" lastseen="10:23pm" />
                <Contact userImg={"https://media.licdn.com/dms/image/C5603AQE9ULDSUu44Hw/profile-displayphoto-shrink_800_800/0/1662813770793?e=1700092800&v=beta&t=yfqW0SijybwlKxv_PukJsSgIgv0gxomJv5Rw7OeMWQM"} name="Nikita Kadiwike" lastseen="10:23pm" />
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