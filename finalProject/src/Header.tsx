import "./Header.css";
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
        <a id='home' href="">Home</a>
        {/* <div className='loginContainer'> */}
          <a className='loginButton' 
          id='logIn'
          // onClick={() => toggleShowLogin() }
          >Log in</a>

        {/* </div> */}
        <a id='favorites' href="">Favorites</a>
      </nav>
    </header>
  );
}

export default Header;
