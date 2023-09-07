import React,{useState} from "react";
// import "../Styles//Login.css"
import "../Authentication/Login.css"
import {FaEyeSlash, FaUser,FaLock,FaEye} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
// import { ChatState } from "../../Context/ChatProvider";



function Login() {
  const [show ,setshow]=useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setloading] = useState(false);

  // const { setUser } = ChatState();
  const click=()=>{
    setshow(!show);
    }

    const submitHandler = async () => {
      setloading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
        return;
      }
  
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "/api/user/login",
          { email, password },
          config
        );
  
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        // setUser(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setloading(false);
        navigate.push("/chats");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
      }
    };

  return <div className="body">
  <div className="login">


<form>
    <h2>Hello!<br/><span>Welcome Back!</span></h2>
    {/* <div className="inpuBox">
        <input type="text" placeholder="
        Username" required/>
        <i><FaUser/></i>

    </div> */}
    <div className="inpuBox">
            <input
              type="email"
          value={email}

              placeholder="
        email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i>
              <FaUser />
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
            value={password}

              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              style={{ right: "50px", fontSize: "20px" }}
              onClick={click}
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
    {/* <label >
        <input type="checkbox"  />
        Keep me logged in
    </label> */}
    {/* <div className="inpuBox">
        <input type="submit"  value="Log in" onClick={submitHandler} isloading={loading} />
        
    </div> */}
    {/* <div className="inpuBox">
        <input type="submit" style={{backgroundColor:"red"}} onClick={()=>{
          setEmail("guest@email.com");
          setPassword("1234");
        }}  value="As a Guest" />
    </div> */}
    <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}

        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
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
