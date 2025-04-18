import '../css/pricingIndex.css'

import React from 'react';

function PricingPage() {
    return (
        <section id="pricing-1518">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Our Pricing</span>
                    <h2 className="cs-title">Select a Plan According to Your Requirements</h2>
                </div>
                <ul className="cs-card-group">
                    {[1, 2, 3].map((index) => (
                        <li key={index} className="cs-item">
                            <div className="cs-flex">
                                <span className="cs-desc">Toddler</span>
                                <h3 className="cs-h3">1-8 Years</h3>
                                <svg className="cs-mask" id={`Layer_2-1518-${index}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 371.1 166.7">
                                    <g id={`Layer_1-2-1518-${index}`}>
                                        {/* SVG Path and Polygon */}
                                    </g>
                                </svg>
                            </div>
                            <div className="cs-wrapper">
                                <ul className="cs-ul">
                                    {/* List items */}
                                </ul>
                                <div className="cs-info">
                                    <span className="cs-price">$175 <span className="cs-duration">/mo</span></span>
                                    <a href="" className="cs-button-solid">Buy Now</a>
                                </div>
                                <svg className="cs-blob" width="273" height="136" viewBox="0 0 273 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M255.232 8.51748C307.391 -27.6114 340.366 67.0792 304.261 114.801C204.089 247.201 72.0026 208.615 16.9974 154.545C-38.0078 100.476 54.1202 43.9093 140.688 70.8035C227.255 97.6976 203.073 44.6464 255.232 8.51748Z" fill="var(--secondary)"/>
                                </svg>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* SVG Graphics */}
            <svg className="cs-background cs-background-top" xmlns="http://www.w3.org/2000/svg" width="1920" height="39" viewBox="0 0 1920 39" fill="none">
                {/* SVG Path */}
            </svg>
            <svg className="cs-background cs-background-bottom" xmlns="http://www.w3.org/2000/svg" width="1920" height="39" viewBox="0 0 1920 39" fill="none">
                {/* SVG Path */}
            </svg>
        </section>
    );
}

export default PricingPage;
