import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <h1>BODY FITNESS CENTER</h1>
           <div>
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="shop">Shop</a>
            <a href="contact">Contact</a>
           </div>
        </nav>
    );
};

export default Header;