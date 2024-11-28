import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={500} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Happy Customer</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-employee"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={99} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Certified workers</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;