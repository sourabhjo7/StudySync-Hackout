import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect } from "react";
import "./signin.css";
import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import googleicon from "./images/gicon.jpeg";
import signinImage from "./images/signin.png";
const UserBaseUrl = "http://localhost:3000";
const Signin = ({setisLoggedIn}) => {
  const callGoogleSignin = async (accessToken) => {
    try {
      // { validateStatus: false, withCredentials: true } this takes with them cookies after body 
      const {status,data}  = await axios.post(`${UserBaseUrl}/auth/google-signin`, {
        googleAccessToken: accessToken,
      },{ validateStatus: false, withCredentials: true });

      if(status==200){
        console.log("logged in STATUS  before navigate",status);
        setisLoggedIn(true);
        console.log("logged in STATUS  after navigate",status);
      }
      
    } catch (e) {
      console.log("eror in backend google signin route or network ");
      alert("Try loggin again");
      setisLoggedIn(false);
    }
  };

  const googleSignin = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    console.log("----this is token--", accessToken);
    const data = await callGoogleSignin(accessToken);
  };

  const login = useGoogleLogin({ onSuccess: googleSignin });

  return (
    
      <div className="Rectangle1"  >
        <div className="Rectangle3" >
            <img className="signinImage" src={signinImage} alt="google "/>
            <button className="google-btn" onClick={login}>
              <img className="googleicon" src={googleicon} alt="google btn "></img>
              Login With Google
            </button>
        </div>
      </div>
    

  );
};

export default Signin;
