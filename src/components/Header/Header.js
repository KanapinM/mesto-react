import React from 'react';
import './Header.css'
import logo from '../../images/mesto.svg';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="текстовый логтип Место Раша" />
        </header>
    );
}

export default Header;