import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import SingleFaq1 from '../faq/SingleFaq1';
import { HashLink as Link } from 'react-router-hash-link'
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceDetailsContent = ({ serviceInfo }) => {
    const { thumbFull, title } = serviceInfo

    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <img src={`/assets/img/service/${thumbFull}`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>How We Work</h2>
                                <p>
                                ZILLAM offers a comprehensive service journey that starts with thorough inspection, followed by collaborative discussion, strategic planning, and precise execution. Our professional electricians guarantee a seamless experience from start to finish.
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    <li>Consulting Service</li>
                                                    <li>24/7 All time Support</li>
                                                    {/* <li>Marketing Service</li> */}
                                                    <li>Expert Team Members</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                The home services industry faces challenges such as a shortage of skilled labor, leading to inconsistent quality and delays. Trust and reliability issues, communication barriers, unclear pricing, and scheduling conflicts contribute to customer dissatisfaction. Ensuring consistent service quality, safety, comprehensive offerings, and eco-friendly practices, along with effective feedback mechanisms, are significant hurdles. Addressing these challenges is crucial to building customer trust and enhancing service efficiency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>What we do?</h3>
                                <p>
                                At ZILLAM, we provide a comprehensive range of home services, including electrical work, carpentry, plumbing, and cleaning. Our platform connects customers with skilled, vetted professionals who deliver reliable, high-quality service. From inspection and strategy planning to execution and follow-up, we ensure every job is handled with precision and safety. We prioritize clear communication, transparent pricing, and a seamless customer experience, making us a trusted partner for all your home maintenance and repair needs. Our commitment to excellence ensures that every service is completed efficiently, upholding the highest standards of quality and customer satisfaction.
                                </p>

                                <div className="faq-style-one dark mt-40">
                                    <h3 className="mb-30">Common Questions Asked</h3>
                                    <div className="accordion" id="faqAccordion">
                                        {Faq1Data.slice(0, 3).map(faq =>
                                            <SingleFaq1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>

                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-personal"></i>
                                                <h4><Link to="#" onClick={handleSmoothScroll}>Budget Planning</Link></h4>
                                                <p>
                                                we offer transparent pricing that fits your budget. Get upfront, honest quotes for every service with no hidden fees, so you can enjoy top-quality work at a price you’ll love. Simple, clear, and trustworthy—just the way it should be.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-career"></i>
                                                <h4><Link to="#" onClick={handleSmoothScroll}>Markets Trend</Link></h4>
                                                <p>
                                                From smart home installations to eco-friendly upgrades, homeowners are embracing innovation and efficiency. ZILLAM offers fast, reliable services with a modern touch, meeting the latest market trends and exceeding customer expectations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <div className="content">
                                        <ul>
                                            <li><Link to="/services#tab1">Electrical</Link></li>
                                            {/* <li className="current-item"><Link to="#">Carpentry</Link></li> */}
                                            <li><Link to="/services#tab2">Plumbing</Link></li>
                                            <li><Link to="/services#tab3">Cleaning</Link></li>
                                            <li><Link to="/services#tab4">Carpentry</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                        Reach out today and let our professionals handle your next home project with expertise and care.
                                        </p>
                                        <h2><a href="tel:+91 6282617650">+91 6282617650</a></h2>
                                        <h4><a href="mailto:support@zillam.com">support@zillam.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" to="/contact-us#">Contact Us</Link>
                                    </div>
                                </div>

                                {/* <div className="single-widget widget-brochure">
                                    <h4 className="widget-title">Brochure</h4>
                                    <ul>
                                        <li><Link to="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link to="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent; 