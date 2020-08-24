import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <ul>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;