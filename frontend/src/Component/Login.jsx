import React from "react";
import "../Styles/Login.css"
import { FaFingerprint, FaUser,FaLock} from "react-icons/fa";


function Login() {
  return <div className="body">
  <div className="login">

<form>
    <h2>Hello!<br/><span>Welcome Back!</span></h2>
    <div className="inpuBox">
        <input type="text" placeholder="
        Username" required/>
        <i><FaUser/></i>

    </div>
   
    <div className="inpuBox">
        <input type="Password" placeholder="
        Password" required />
        <i><FaLock/></i>
    </div>
    <label >
        <input type="checkbox"  />
        Keep me logged in
    </label>
    <div className="inpuBox">
        <input type="submit"  value="Log in" />
    </div>
</form>
<h4>Or</h4>
<div className="finger">
    <div className="fingerbox">
    <FaFingerprint/>
    </div>
    <p>Login With FingerPrint</p>
</div>
  </div>;
  </div>
}

export default Login;
