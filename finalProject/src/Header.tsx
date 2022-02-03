import "./Header.css";
import Login from './Login'
import React, { useState } from 'react'

// const [showLogin, setShowLogin] = useState(false);

function Header() {
  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className='titles'>Bottom of the Barrel</h1>
        <h2 className='titles'>A Cocktail App for the Poorly-Stocked Bar</h2>
      </div>
      <nav className="navContainer">
        <a id='home' href="">Home</a>
        {/* <div className='loginContainer'> */}
          <a className='loginButton' 
          id='logIn'
          // onClick={() => setShowLogin(true) }
          >Log in</a>
          {/* <Login onClose={() => setShowLogin(false)} showLogin={showLogin}></Login> */}
        {/* </div> */}
        <a id='favorites' href="">Favorites</a>
      </nav>
    </header>
  );
}

export default Header;
