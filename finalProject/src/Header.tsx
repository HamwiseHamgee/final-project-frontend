import "./Header.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./Login";
import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle, signOut } from "./firebaseConfig";
import AuthContext from "./AuthContext";

function Header() {
  const { user } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);
  // const [showLogin, setShowLogin] = useState(false);

  // function toggleShowLogin() {
  //   setShowLogin(!showLogin);
  // }

  {
    /* <Login onClose={() => setShowLogin(false)} showLogin={showLogin}></Login> */
  }

  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className="title">BOTTOM OF THE BARREL</h1>
        <h2 className="titleDescription">
          A Cocktail App for the Poorly-Stocked Bar
        </h2>
      </div>
      <nav className="navContainer">
        <Link id="home" to="/">
          Home
        </Link>
        {loggedIn === false ? (
          <div id="login" onClick={signInWithGoogle}>
            Log In
          </div>
        ) : (
          <div id="login" onClick={signOut}>
            Log Out
          </div>
        )}

        {/* <Link id='login' to='/login'>Log in</Link> */}
        <Link id="favorites" to="/Favorites">
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default Header;
