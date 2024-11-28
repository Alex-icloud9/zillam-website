import React from 'react';
import ReactWOW from 'react-wow';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                Reach out today and let our professionals handle your next home project with expertise and care.
                </p>
                <ul>
                    <ReactWOW animation='fadeInUp'>
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="content">
                                <h5 className="title">Hotline</h5>
                                <a href="">+91 6282617650</a>
                            </div>
                        </li>
                    </ReactWOW>
                    <ReactWOW delay="300ms" animation='fadeInUp'>
                        <li>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <br />
                            <div className="info">
                                <h5 className="title">Our Locations</h5>
                                <p>
                                    Thiruvananthapuram, <br /> Kochi
                                </p>
                            </div>
                        </li>
                    </ReactWOW>
                    <ReactWOW delay="500ms" animation='fadeInUp'>
                        <li>
                            <div className="icon">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">Write to Us</h5>
                                <a href="mailto:support@zillam.com">support@zillam.com</a>
                            </div>
                        </li>
                    </ReactWOW>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;