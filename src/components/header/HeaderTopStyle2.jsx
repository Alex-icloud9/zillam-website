import React from 'react';

const HeaderTopStyle2 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-two">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8">
                            <ul className="item-flex">
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <strong>E-mail</strong>
                                        support@zillam.com
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                    <a href="tel:+91 6282617650"><i className="fas fa-user-headset"></i></a>
                                    </div>
                                    <div className="info">
                                        <strong>Phone</strong>
                                        <a href="tel:+4733378901">+91 6282617650</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="call-entry">
                                <div className="icon">
                                    <i className="fas fa-comments-alt-dollar"></i>
                                </div>
                                <div className="info">
                                    <p>Have any Questions?</p>
                                    <h5><a href="mailto:support@zillam.com">support@zillam.com</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle2;