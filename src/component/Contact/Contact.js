import "./Contact.css";


export default function Contact({name, lastseen, userImg}){
    return(
        <>
            <div className="main-card-container">
                <div className="img-container">
                <img src={userImg} className="user-img"/>

                </div>
              
                <div>
                <h2>{name}</h2>
                <p>{lastseen}</p>
                </div>
            </div>
        
        </>
    )
}



 {/* <Contact userImg={"https://avatars.githubusercontent.com/u/139730268?v=4"} name="sejal kakade" lastseen="10:23pm" />
   <Contact userImg="https://avatars.githubusercontent.com/u/124554439?s=96&v=4" name="Bandini Kohare" lastseen="10:23pm" />
   <Contact userImg={"https://avatars.githubusercontent.com/u/63898276?v=4"} name="Harshvardhan khairnar" lastseen="10:23pm" />
   <Contact userImg={"https://media.licdn.com/dms/image/D4E03AQET4jPj4yYzmw/profile-displayphoto-shrink_100_100/0/1691679310382?e=1700092800&v=beta&t=1tvPoYBNjS5YJ5UTJ04gRDTAHgcsG5obzm6DyLvlWXw"} name="Samiksha shahare" lastseen="10:23pm" />
   <Contact userImg={"https://media.licdn.com/dms/image/C5603AQE9ULDSUu44Hw/profile-displayphoto-shrink_800_800/0/1662813770793?e=1700092800&v=beta&t=yfqW0SijybwlKxv_PukJsSgIgv0gxomJv5Rw7OeMWQM"} name="Nikita Kadiwike" lastseen="10:23pm" /> */}
//    </>