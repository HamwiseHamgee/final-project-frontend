// import {Link} from 'react-router-dom'
// run npm install react-router-dom react-google-login
// import { GoogleLogin } from 'react-google-login';
// import { isPropertySignature } from 'typescript';
import './Login.css'
import React from 'react'
import Header from './Header'
import { useState } from 'react'


interface Props {
    showLogin: boolean;
    onClose: () => void;
}

function Login(
    // {showLogin, onClose}: Props
    ){
    // if ( !showLogin ) {
    //     return null
    // } 
    return (
        <div className="loginContainer" 
            // onClick={() => onClose()}
            >
            <div className='loginContent'>
                <div className='logInHeader'>
                    <h3>Log Into Your Account</h3>
                    <button 
                    // onClick={() => onClose() } 
                    className='closeLoginButton'>Close</button>
                </div>
                <div className="loginForm">
                
                    <p>
                        <label>Username/Email: </label> <input type='text'></input>
                    </p>

                    <p>
                        <label>Password: </label> <input type='text'></input>
                    </p>
                
                </div>

            </div>
        </div>
    )
}

export default Login;