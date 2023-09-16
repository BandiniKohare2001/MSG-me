import "./Login.css"
export default function Login({heading ,Login, btn}){
    return (
        <>
      <form>
       <div className="LoginContainer">
        <h1 className="heading">{heading}</h1>  
        <p className="Login">{Login}</p>
        <label for="username"></label>
        <input type="text" placeholder="e-mail or username" className="inputBox" required id="username"/>
        <label for="password"></label>
        <input type="password"  placeholder="password"  className="inputBox" id="password" required/>
        <button type="submit" className="Loginbtn" >{btn}</button>
       

        </div>
        </form>
        </>
    )
}