import "./Login.css"
import Register from "./../Register/Register"
import { Link } from "react-router-dom"
import ChatScreen from "../../components/ChatScreen/ChatScreen"

export default function Login(){
    return (
        <>
      <form>
       <div className="LoginContainer">
        <h1 className="heading">MSG-me</h1>  
        <p className="Login">Login</p>
        <label for="username"></label>
        <input type="text" placeholder="e-mail or username" className="inputBox" required id="username" name="username"/>
        <label for="password"></label>
        <input type="password"  placeholder="password"  className="inputBox" id="password" required name="username"/>
      <span><input type="checkbox" name="checkbox" className="checkboxtext"/><label for="checkbox"> Remamber Me</label> <a href="#" className="forgotpass">forgot password ?</a></span>
      <Link to="/chatscreen" className="login-text">
      <button type="submit" className="Loginbtn"  id="login_btn" >
        Log In</button></Link> 
      <p className="nmember">Not a member ?<Link to ="/register">Register</Link></p>
        </div>
        </form>
        </>
    )
} 


