import React from 'react';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1Data from '@/assets/jsonData/testimonial/Testimonial1Data.json';
import SingleTestimonial1 from './SingleTestimonial1';
import illustration5 from '/assets/img/illustration/5.png';
import shape19 from '/assets/img/shape/19.png';
import shape19Blue from '/assets/img/shape/19-blue.png';
import shape19Green from '/assets/img/shape/19-green.png';
import hp from '/assets/img/illustration/hp.png';
import si from '/assets/img/illustration/si.png';
import playstore from '/assets/img/illustration/playstore.png';
import appstore3 from '/assets/img/illustration/appstore3.png';

const TestimonialStyle1 = ({ sectionClass, shapeBlue, shapeGreen }) => {
    return (
        <>
            <div className={`testimonial-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="testimonial-thumb">
                                <div className="thumb-item">
                                    <img src={illustration5} alt="illustration" />
                                    <div className="mini-shape">
                                        {shapeBlue ? (
                                            <img src={shape19Blue} alt="illustration" />
                                        ) : shapeGreen ? (
                                            <img src={shape19Green} alt="illustration" />
                                        ) : (
                                            <img src={shape19} alt="illustration" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="testimonial-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Keyboard, Autoplay]}
                                        freeMode={true}
                                        grabCursor={true}
                                        autoplay={true}
                                        loop={true}
                                        slidesPerView={1}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                    >
                                        {Testimonial1Data.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <SingleTestimonial1 testimonial={testimonial} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adding the new image below the testimonial component */}
            <div className="container d-flex justify-content-between align-items-center mt-4 flex-wrap" style={{ padding: '0 120px' }}>
                <br></br>
                <img
                    src={hp}
                    alt="Left Image"
                    className="responsive-img"
                    style={{
                        width: '45%',
                        maxWidth: '380px',
                        height: 'auto',
                    }}
                />
                <br></br>
                <img
                    src={si}
                    alt="Right Image"
                    className="responsive-img"
                    style={{
                        width: '45%',
                        maxWidth: '380px',
                        height: 'auto',
                    }}
                />
                <br></br>
            </div>
            <br></br>
            

            <div className="container d-flex justify-content-between align-items-center mt-4 flex-wrap"  style={{ padding: '0 290px' }}>
                <img
                    src={playstore}
                    alt="Play Store"
                    className="responsive-img"
                    style={{
                        width: '45%',
                        maxWidth: '170px',
                        height: 'auto',
                        // marginBottom: '20px',
                        marginRight: '340px',
                        // marginLeft: '0px',
                    }}
                />
                <br></br>
                <br></br>
                <img
                    src={appstore3}
                    alt="App Store"
                    className="responsive-img"
                    style={{
                        width: '45%',
                        maxWidth: '160px',
                        height: 'auto',
                        marginLeft: '0px',
                        // marginRight: '0px',
                    }}
                />
                <br></br>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
};

export default TestimonialStyle1;
