
import React from 'react';
import shape7 from '/assets/img/shape/7.png';
import shape9 from '/assets/img/shape/9.png';
import logoLight from '/assets/img/logo-light.png';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {shape ? <img src={shape} alt="Shape" /> : <img src={shape7} alt="Shape" />}
                    </div>
                    <div className="item">
                        {/* <img src={shape9} alt="Shape" /> */}
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Link to="/#">
                                        {logo ? <img className="logo" src={logo} alt="Logo" /> : <img className="logo" src={logoLight} alt="Logo" />}
                                    </Link>
                                    <p>
                                        Expert Solution for every corner of your home
                                    </p>
                                    <br>
                                    </br>
                                    <div className="opening-hours">
                                        <h5>DOWNLOAD OUR APP </h5>
                                        <ul>
                                            {/* <li>
                                                <div className="working-day">Monday – Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">2pm – 2pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Off Day</div>
                                            </li> */}
                                            <li>
                                               <img src="\assets\img\illustration\playstore.png" alt="Play Store" style={{ width: '150px' }} />
                                            </li>
                                            {/* <li>
                                               <i className="flaticon-play-store"></i> Play Store
                                            </li>
                                            
                                            <li>
                                               <i className="flaticon-app-store"></i> App Store
                                            </li> */}
                                            
                                            <li>
                                               <img src="\assets\img\illustration\appstore1.png" alt="App Store" style={{ width: '150px' }} />
                                            </li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Company</h4>
                                    <ul>
                                        <li>
                                            <Link to="/about-us#">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-page#">Terms of Use</Link>
                                        </li>
                                        <li>
                                            <Link to="/cancellation-refund-policy#">Cancellation & Refunds</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/pricing#">Plans & Pricing</Link>
                                        </li>  */}
                                        <li>
                                            <Link to="/eula#">License Agreement</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link to="/services/#tab1" id="nav-id-1">Electrical</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/#tab1" id="nav-id-2">Plumbing</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/#tab1" id="nav-id-3">Cleaning</Link>
                                        </li>
                                        <li>
                                            <Link to="/services/#tab1" id="nav-id-4">Carpentry</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">Subscribe to ZILLAM</h4>
                                <p>
                                   <q>Stay updated with expert tips and home improvement news delivered straight to you.</q>
                                </p>
                                <div className={`f-item newsletter ${formStyle}`}>
                                    <FooterNewsLetter />
                                </div>
                                <ul className="footer-social">
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())} Zillam <a to="https://themeforest.net/user/validthemes/portfolio" target='_blank' rel="noreferrer"></a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                
                                    <li>
                                        <Link to="/faq#">FAQ</Link>
                                    </li>
                                    <li>
                                    <Link to="/privacy-policy#">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us#">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;