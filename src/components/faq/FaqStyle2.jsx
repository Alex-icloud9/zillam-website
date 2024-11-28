import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json'
import SingleFaq1 from './SingleFaq1';
import { HashLink as Link } from 'react-router-hash-link';

const FaqStyle2 = () => {
    return (
        <>
            <div className="faq-area bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-md-30 mb-xs-30">
                            <div className="faq-sidebar">
                                <div className="faq-sidebar-item bg-theme text-light" style={{ backgroundImage: `url(/assets/img/shape/map-light.png)` }}>
                                    <h4>Need Help?</h4>
                                    <ul>
                                        <li><Link to="#">Service Provided</Link></li>
                                        <li><Link to="#">Verification</Link></li>
                                        <li><Link to="#">Booking</Link></li>
                                        <li><Link to="#">Reschedule</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 faq-style-one dark pl-50 pl-md-15 pl-xs-15">
                            {/* <h2 className="title mb-40">You need to know <br /> before begin everything.</h2> */}
                            <h2 className="title mb-40">General Informations</h2>
                            <div className="accordion" id="faqAccordion">
                                {Faq1Data.map(faq =>
                                    <SingleFaq1 faq={faq} key={faq.id} />
                                )}

                            </div>
                            {/* <br></br> */}
                    {/* <p>If you have any further questions or need assistance, feel free to reach out to our support team.</p> <br></br> <br></br> <h2 className="title mb-20">Thank you for choosing Zillam!</h2> */}
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
}; 

export default FaqStyle2;
