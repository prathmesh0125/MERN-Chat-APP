import React, { useState } from "react";
// import "../Styles/Login.css"
import "../Authentication/Login.css";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaFingerprint,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaVoicemail,
  FaUsermail,
} from "react-icons/fa";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [profileImg, setprofileImg] = useState();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  const handleClick = () => {
    setShow(!show);
  };

  // const submitHandler=()=>{

  // }

  const submitHandler = async () => {
    setloading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 700,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 600,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, profileImg);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          profileImg,
        },
        config
      );
      // console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
      navigate.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 700,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
    }
  };
  const postDetails = (pics) => {
    setloading(true);
    if (pics === undefined) {
      toast({
        title: "please select an image",
        status: "warning",
        duration: 600,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dmwd2cl3e");
      fetch("https://api.cloudinary.com/v1_1/dmwd2cl3e", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setprofileImg(data.url.toString());
          console.log(data.url.toString());
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    } else {
      toast({
        title: "please select an image",
        status: "warning",
        duration: 700,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
  };
  return (
    <div className="body">
      <div className="login">
        <form>
          <h2>
            Hello!
            {/* <br /> */}
            {/* <span>Welcome Back!</span> */}
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
              style={{ right: "50px", fontSize: "20px" }}
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
          <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
              type="file"
              p={1.5}
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </FormControl>
          <Button
            // colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
            // isLoading={loading}
          >
            Sign Up
          </Button>
          {/* <div className="inpuBox">
            <input
              type="submit"
             
              value="Sign Up"
              onClick={submitHandler}
              isloading={loading}
            />
          </div> */}
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
