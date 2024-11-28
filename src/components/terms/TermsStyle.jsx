import React from 'react';
import termsData from '@/assets/jsonData/terms/TermsData.json';

const TermsStyle = ({ fullContent }) => {
    return (
        <>
            <div className="terms-style-area relative">
                <div className="container">
                    <div className="terms-style default-padding">
                        {/* <h4 className="sub-heading">Terms and Conditions</h4> */}
                        <h2 className="title mb-30" style={{ fontSize: '40px' }}>Zillam Mobile Application:</h2>
                        <h4 className="sub-heading" style={{ fontSize: '23px' }}>Terms of Use</h4>
                        <div className="terms-content">
                            {fullContent ?
                                <>
                                    {termsData.map((term, index) => (
                                        <div key={index} className="terms-section">
                                            <h3 className='title mb-30' style={{ fontSize: '38px' }}>{term.title}</h3>
                                            <p className='content mb-30' style={{ fontSize: '21px' }}>{term.content}</p>
                                            {term.subsections && term.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {term.subsections.map((sub, subIndex) => (
                                                        <div key={subIndex} className="subsection">
                                                            <h4 style={{ fontSize: '22px' }}>{sub.title}</h4>
                                                            <p style={{ fontSize: '20px' }}>{sub.content}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </> :
                                <>
                                    {termsData.slice(0, 3).map((term, index) => (
                                        <div key={index} className="terms-section">
                                            <h3 style={{ fontSize: '18px' }}>{term.title}</h3>
                                            <p style={{ fontSize: '22px' }}>{term.content}</p>
                                            {term.subsections && term.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {term.subsections.map((sub, subIndex) => (
                                                        <div key={subIndex} className="subsection">
                                                            <h4 style={{ fontSize: '16px' }}>{sub.title}</h4>
                                                            <p style={{ fontSize: '20px' }}>{sub.content}</p>
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

export default TermsStyle;