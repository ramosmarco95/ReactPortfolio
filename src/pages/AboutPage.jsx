import React from 'react';
import  '../css/aboutIndex.css'
import meimage from  '../assets/about/meimage.jpg'
import family1 from '../assets/about/family1.jpg'
import outdoor from '../assets/about/outdoor.jpg'




function AboutPage() {
    return (
        <section id="meet-us-1021">
        <div className="cs-container">
            <div className="cs-content">
            <img className="cs-graphic" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/Ornament.svg" alt="chef" width="456" height="31" />
            <h2 className="cs-title">Get To Know Me</h2>
            <p className="cs-text">
                
As a software developer, I immerse myself in the intricate world of coding, crafting innovative solutions to real-world problems. However, beyond the screen, I find solace and rejuvenation in the great outdoors. Whether hiking through lush forests or camping beneath starlit skies, nature offers me a canvas to unwind and reconnect with the world around me. Yet, amidst my tech pursuits and outdoor adventures, nothing compares to the warmth of family time. Sharing laughter, stories, and experiences with loved ones brings a sense of fulfillment and joy that transcends any other pursuit. Thus, my life is a harmonious blend of coding challenges, outdoor escapades, and cherished moments with family, each enriching the tapestry of my existence in its unique way.
            </p>
            </div>
            <ul className="cs-card-group">
            <li className="cs-item">
                <picture className="cs-picture">
                <source media="(max-width: 767px)" srcSet={meimage} />
                <source media="(min-width: 768px)" srcSet={meimage} />
                <img aria-hidden="true" loading="lazy" decoding="async" src={meimage} alt="chef" width="305" height="335" />
                </picture>
                <div className="cs-info">
                <span className="cs-name">Me</span>
                <span className="cs-job">Software Developer</span>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-picture">
                <source media="(max-width: 767px)" srcSet={family1} />
                <source media="(min-width: 768px)" srcSet={family1} />
                <img aria-hidden="true" loading="lazy" decoding="async" src={family1} alt="chef" width="305" height="335" />
                </picture>
                <div className="cs-info">
                <span className="cs-name">My Family</span>
                <span className="cs-job">Sharing laughter, stories, and experiences with loved ones brings a sense of fulfillment and joy that transcends any other pursuit.</span>
                </div>
            </li>
            <li className="cs-item">
                <picture className="cs-picture">
                <source media="(max-width: 767px)" srcSet={outdoor} />
                <source media="(min-width: 768px)" srcSet={outdoor}  />
                <img aria-hidden="true" loading="lazy" decoding="async" src={outdoor}  alt="chef" width="305" height="335" />
                </picture>
                <div className="cs-info">
                <span className="cs-name">My World</span>
                <span className="cs-job"> Beyond the screen, I find solace and rejuvenation in the great outdoors. Whether hiking through lush forests or camping beneath starlit skies, nature offers me a canvas to unwind and reconnect with the world around me. </span>
                </div>
            </li>
            </ul>
        </div>
        </section>
    );
    
}






export default AboutPage