import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li>
                <Link className="facebook" to="https://www.facebook.com/zillamservices" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li>
                <Link className="Instagram" to="https://www.instagram.com/zillam_app/" target="_blank">
                    <i className="fab fa-instagram"></i>
                </Link>
            </li>
            <li>
                <Link className="twitter" to="https://x.com/zillamapp" target="_blank">
                    <img 
                        src="assets/img/icon/x-white.svg" 
                        alt="X Icon" 
                        style={{ width: '16px', height: '19px' }}
                    />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShare;
