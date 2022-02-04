import "./Header.css";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';


function Header() {
  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className='titles'>Bottom of the Barrel</h1>
        <h2 className='titles'>A Cocktail App for the Poorly-Stocked Bar</h2>
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
