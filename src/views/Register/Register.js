import "./Register.css"
export default function Register({heading ,Register, btn}){
    return (
        <>
      <form>
       <div className="RegisterContainer">
        <h1 className="heading">{heading}</h1>  
        <p className="Register">{Register}</p>
        <label for="username"></label>
        <input type="text" placeholder="Display Name" className="inputBox" required id="username"/>
        <label for="e-mail"></label>
        <input type="text" placeholder="e-mail" className="inputBox" required id="e-mail"/>
        <label for="password"></label>
        <input type="password"  placeholder="password"  className="inputBox" id="password" required/>
        <label for="password"></label>
        <input type="password"  placeholder="Reapeat Password"  className="inputBox" id="password" required/>

        <button type="submit"  className="Registerbtn" >{btn}</button>
       

        </div>
        </form>
        </>
    )
}