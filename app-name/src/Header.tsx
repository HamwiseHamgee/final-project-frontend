import './Header.css';

function Header() {
    return(
        <header className='headerContainer'>
            <h1>Bottom of the Barrel</h1>
            <h2>A Cocktail App for the Poorly-Stocked Bar</h2>
            <nav className='navContainer'>
                <a href=''>Home</a>
                <a href=''>Log in</a>
                <a href=''>Favorites</a>
            </nav>
        </header>
    )
}

export default Header;