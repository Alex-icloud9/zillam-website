import React from 'react';
import cancellationRefundData from '@/assets/jsonData/cancellation/CancellationRefundPolicyData.json';

const CancellationRefundPolicy = ({ fullContent }) => {
    return (
        <>
            <div className="cancellation-refund-policy-area relative">
                <div className="container">
                    <div className="cancellation-refund-policy default-padding">
                        <h2 className="title mb-30" style={{ fontSize: '40px' }}>Zillam App Cancellation & Refund Policy</h2>
                        
                        <h4 className="sub-heading" style={{ fontSize: '25px' }}>Cancellation & Refund Policy</h4>
                        <br></br>
                        <br></br>
                        {/* <h2 className="title mb-30" style={{ fontSize: '40px' }}>Zillam App Cancellation & Refund Policy</h2> */}
                        <h3 className="title mb-30" style={{ fontSize: '23px' }}>Effective Date: 24 October 2024</h3>
                        <div className="cancellation-refund-content">
                            {fullContent ? 
                                <>
                                    {cancellationRefundData.map((section, index) => (
                                        <div key={index} className="policy-section">
                                            <h3 className="title mb-30" style={{ fontSize: '38px' }}>{section.title}</h3>
                                            <p className="content mb-30" style={{ fontSize: '21px' }}>
                                                {section.content}
                                            </p>
                                            {section.subsections && section.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {section.subsections.map((sub, subIndex) => (
                                                        <div key={subIndex} className="subsection">
                                                            <h4 style={{ fontSize: '22px' }}>{sub.title}</h4>
                                                            <p style={{ fontSize: '20px' }}>{sub.content}</p>
                                                            {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                                                                <ul style={{ fontSize: '20px' }}>
                                                                    {sub.bulletPoints.map((bullet, bulletIndex) => (
                                                                        <li key={bulletIndex}>{bullet}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </>
                                : 
                                <>
                                    {cancellationRefundData.slice(0, 3).map((section, index) => (
                                        <div key={index} className="policy-section">
                                            <h3 style={{ fontSize: '18px' }}>{section.title}</h3>
                                            <p style={{ fontSize: '22px' }}>
                                                {section.content}
                                            </p>
                                            {section.subsections && section.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {section.subsections.map((sub, subIndex) => (
                                                        <div key={subIndex} className="subsection">
                                                            <h4 style={{ fontSize: '16px' }}>{sub.title}</h4>
                                                            <p style={{ fontSize: '20px' }}>{sub.content}</p>
                                                            {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                                                                <ul style={{ fontSize: '20px' }}>
                                                                    {sub.bulletPoints.map((bullet, bulletIndex) => (
                                                                        <li key={bulletIndex}>{bullet}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CancellationRefundPolicy;
