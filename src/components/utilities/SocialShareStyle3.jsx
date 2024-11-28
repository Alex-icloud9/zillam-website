import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SocialShareStyle3 = () => {
    return (
        <>
            <li className="facebook">
                <Link to="https://www.facebook.com/zillamservices" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li className="Instagram">
                <Link to="https://www.instagram.com/zillam_app/" target="_blank">
                    <i className="fab fa-instagram"></i>
                </Link>
            </li>
            <li>
                <Link className="twitter" to="https://x.com/zillamapp" target="_blank">
                    <img 
                        src="assets/img/icon/xx.png" 
                        alt="X Icon" 
                        style={{ width: '20px', height: '20px' }}
                    />
                </Link>
            </li>
            <li className="linkedin">
                <Link to="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShareStyle3;