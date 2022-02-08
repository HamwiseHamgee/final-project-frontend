// import {Link} from 'react-router-dom'
// run npm install react-router-dom react-google-login
// import { GoogleLogin } from 'react-google-login';
// import { isPropertySignature } from 'typescript';
import "./Login.css";
import React from "react";
import Header from "./Header";
import { useState } from "react";
import { signInWithGoogle, signOut } from "./firebaseConfig";

// interface Props {
//     showLogin: boolean;
//     onClose: () => void;
// }

function Login() {
// {showLogin, onClose}: Props
  // if ( !showLogin ) {
  //     return null
  // }
  return (
    <div
      className="loginContainer"
      // onClick={() => onClose()}
    >
      <div className="loginContent">
        <div className="logInHeader">
          <h3>Log Into Your Account</h3>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
