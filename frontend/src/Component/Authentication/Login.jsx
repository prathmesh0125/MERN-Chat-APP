import React,{useState} from "react";
// import "../Styles//Login.css"
import "../Authentication/Login.css"
import { FaFingerprint,FaEyeSlash, FaUser,FaLock,FaEye} from "react-icons/fa";


function Login() {
    const [show ,setshow]=useState(false);

    const click=()=>{
        setshow(!show);
    }
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
        <input type="email" placeholder="
        email" required/>
        <i><FaUser/></i>

    </div>
    <div className="inpuBox">
        <input type={show ?"text":"Password"} placeholder="
        Password" required/>
        <i><FaLock/></i>
        <i style={{right:'50px',fontSize:'20px'}}
        
        onClick={click}
        > {!show ? (
            <i>
              <FaEyeSlash />
            </i>
          ) : (
            <i>
              <FaEye />
            </i>
          )}</i>

    </div>
    {/* <label >
        <input type="checkbox"  />
        Keep me logged in
    </label> */}
    <div className="inpuBox">
        <input type="submit"  value="Log in" />
    </div>
</form>
{/* <h4>Or</h4> */}
{/* <div className="finger">
    <div className="fingerbox">
    <FaFingerprint/>
    </div>
    <p>Login With FingerPrint</p>
</div> */}
  </div>;
  </div>
}

export default Login;
