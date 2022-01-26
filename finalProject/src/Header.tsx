import "./Header.css";

function Header() {
  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <h1 className='titles'>Bottom of the Barrel</h1>
        <h2 className='titles'>A Cocktail App for the Poorly-Stocked Bar</h2>
      </div>
      <nav className="navContainer">
        <a id='home' href="">Home</a>
        <a id='logIn' href="">Log in</a>
        <a id='favorites' href="">Favorites</a>
      </nav>
    </header>
  );
}

export default Header;
