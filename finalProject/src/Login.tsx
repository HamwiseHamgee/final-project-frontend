// import {Link} from 'react-router-dom'
// run npm install react-router-dom react-google-login
import { GoogleLogin } from 'react-google-login';
import { isPropertySignature } from 'typescript';
import './Login.css'
import React from 'react'
import Header from './Header'
import { useState } from 'react'

function Login(){
    if ( null
        // !props.showLogin
        ) {
        return null
    }
    return (
        <div className="loginContainer" 
            // onClick={props.onClose}
            >
            <div className='loginContent'>
                <div className='logInHeader'>
                    <h3>Log Into Your Account</h3>
                    <button 
                    // onClick={ props.onClose } 
                    className='closeLoginButton'>Close</button>
                </div>
                <div className="loginForm">
                
                    <p>
                        <label>Username/Email: </label> <input></input>
                    </p>

                    <p>
                        <label>Password: </label> <input></input>
                    </p>
                
                </div>

            </div>
        </div>
    )
}

export default Login;