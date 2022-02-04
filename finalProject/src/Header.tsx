import "./Header.css";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './Login'
import React, { useState } from 'react'

// using npx popup-modal


function Header() {
  
// const [showLogin, setShowLogin] = useState(false);

// function toggleShowLogin() {
//   setShowLogin(!showLogin);
// }

{/* <Login onClose={() => setShowLogin(false)} showLogin={showLogin}></Login> */}

  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className='title'>Bottom of the Barrel</h1>
        <h2 className='titleDescription'>A Cocktail App for the Poorly-Stocked Bar</h2>
      </div>
      <nav className="navContainer">
        <Link id='home' to="/">Home</Link>
        <a id='logIn' href="">Log in</a>
        <Link id='favorites' to="/Favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;
