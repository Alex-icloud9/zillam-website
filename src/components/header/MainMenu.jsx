import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                {/* Home link updated to go directly to a page */}
                <li>
                    <Link to="/#">Home</Link>
                </li>

                {/* <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/about-us#">About Us</Link></li>
                        <li><Link to="/faq#">FAQ</Link></li>
                        <li><Link to="/contact-us#">Contact Us</Link></li>
                    </ul>
                </li> */}

                <li><Link to="/services#">Services</Link></li>  {/*No pages for servives*/}

                <li><Link to="/about-us#">About us</Link></li>  {/*No pages for Contact*/}

                <li><Link to="/contact-us#">contact</Link></li>  {/*No pages for Contact*/}
            </ul>
        </>
    );
};

export default MainMenu;