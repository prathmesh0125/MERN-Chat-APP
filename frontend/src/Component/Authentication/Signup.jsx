import React, { useState } from "react";
// import "../Styles/Login.css"
import "../Authentication/Login.css";

import {
  FaFingerprint,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profileImg, setprofileImg] = useState();

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="body">
      <div className="login">
        <form>
          <h2>
            Hello!
            <br />
            <span>Welcome Back!</span>
          </h2>
          <div className="inpuBox">
            <input
              type="text"
              placeholder="
        Username"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <i>
              <FaUser />
            </i>
          </div>
          <div className="inpuBox">
            <input
              type="email"
              placeholder="
        email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i>
              <FaLock />
            </i>
          </div>
          <div className="inpuBox">
            <i>
              <FaLock />
            </i>
            <input
              type={show ? "text" : "Password"}
              placeholder="
                Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              style={{ right: "50px", fontSize: "20px" }}
              onClick={handleClick}
            >
              {" "}
              {!show ? (
                <i>
                  <FaEyeSlash />
                </i>
              ) : (
                <i>
                  <FaEye />
                </i>
              )}
            </i>
          </div>
          <div className="inpuBox">
            <input
              type={show ? "text" : "Password"}
              placeholder="
       Conform Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i>
              <FaLock />
            </i>
            <i
              style={{ right: "17px", fontSize: "20px" }}
              onClick={handleClick}
            >
              {!show ? (
                <i>
                  <FaEyeSlash />
                </i>
              ) : (
                <i>
                  <FaEye />
                </i>
              )}
            </i>
          </div>

          {/* <label >
        <input type="checkbox"  />
        Keep me logged in
    </label> */}
          <div className="inpuBox">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
        {/* <h4>Or</h4> */}
        {/* <div className="finger">
    <div className="fingerbox">
    <FaFingerprint/>
    </div>
    <p>Login With FingerPrint</p>
</div> */}
      </div>
      ;
    </div>
  );
}

export default Login;
