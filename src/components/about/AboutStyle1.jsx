import React from 'react';
import anim1Thumb from '/assets/img/shape/anim-1.png'
import anim2Thumb from '/assets/img/shape/anim-2.png'
import anim3Thumb from '/assets/img/shape/anim-3.png'
import anim4Thumb from '/assets/img/shape/anim-4.png'
import aboutThumb from "/assets/img/about/1.jpg"
import signatureThumb from "/assets/img/signature.png"
import About1Card from './About1Card';
import ReactWOW from 'react-wow';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <img src={anim1Thumb} alt="Image Not Found" />
                    <img src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Feel Valued & Rewarded</div> 
                            <h2 className="title mb-25">Quick,reliable and affordable Home Service</h2>
                            
                            <p>
                                 We brings you reliable, expert solutions for every corner of your home. Whether you need something installed, repaired, or maintained, our skilled professionals ensure quality service that you can trust. With <q>ZILLAM</q>, keeping your home in top shape has never been easier.
                            </p>
                            <p>
                                Experience the peace of mind that comes with knowing your home is in capable hands. At ZILLAM, we don’t just fix problems – we provide lasting solutions that help your home shine, inside and out. Let us handle the hard work so you can enjoy the things that matter most.
                            </p>
                            {/* <div className="owner-info">
                                <div className="left-info">
                                     <h4>Shaji Kurian</h4>
                                    <span>CEO & Founder</span> 
                                </div>
                                <div className="right-info">
                                    <img src={signatureThumb} alt="Image Not Found" />
                                </div>
                            </div> */}
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <ReactWOW animation='fadeInRight'>
                                    <img src={aboutThumb} alt="Image Not Found" />
                                </ReactWOW>
                                <About1Card />
                                <ReactWOW delay='300ms' animation='fadeInDown'>
                                    <div className="thumb-shape-bottom wow ">
                                        <img src={anim3Thumb} alt="Image Not Found" />
                                        <img src={anim4Thumb} alt="Image Not Found" />
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;