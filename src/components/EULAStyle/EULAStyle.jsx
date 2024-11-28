import React from 'react';
import eulaData from '@/assets/jsonData/eula/EULAData.json'; // Assuming this is the path for EULA JSON

const EULAStyle = ({ fullContent }) => {
    return (
        <>
            <div className="eula-style-area relative">
                <div className="container">
                    <div className="eula-style default-padding">
                        <h2 className="title mb-30" style={{ fontSize: '40px' }}>Zillam Mobile Application:</h2>
                        <h4 className="sub-heading" style={{ fontSize: '23px' }}>End User License Agreement (EULA)</h4>
                        <div className="eula-content">
                            {fullContent ?
                                <>
                                    {eulaData.map((section, index) => (
                                        <div key={index} className="eula-section">
                                            <h3 className='title mb-30' style={{ fontSize: '38px' }}>{section.title}</h3>
                                            <p className='content mb-30' style={{ fontSize: '21px' }}>{section.content}</p>
                                            {section.subsections && section.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {section.subsections.map((sub, subIndex) => (
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
                                    {eulaData.slice(0, 3).map((section, index) => (
                                        <div key={index} className="eula-section">
                                            <h3 style={{ fontSize: '18px' }}>{section.title}</h3>
                                            <p style={{ fontSize: '22px' }}>{section.content}</p>
                                            {section.subsections && section.subsections.length > 0 && (
                                                <div className="subsections">
                                                    {section.subsections.map((sub, subIndex) => (
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

export default EULAStyle;
