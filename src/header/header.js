import React from 'react';
import logo from './img/logo.jpg';
import HeaderNav from './nav';

import './header.css';


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">

                            <div className="header-logo"><a href="#"><img src={logo} alt="Logo" /></a></div>

                        </div>

                        <div className="col-lg-10">
                            <HeaderNav />
                        </div>
                    </div>
                </div>
            </header>
        </div>);
}

export default Header;