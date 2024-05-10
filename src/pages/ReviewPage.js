import React from "react";
import '../css/reviews_subscribe.css'


function ReviewPage() {
    return (
    <section id="reviews-1611">
        <div className="cs-container">
        <picture className="cs-picture">
            {/* Mobile and Tablet Image */}
            <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg" />
            <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/fishing7.jpg" alt="fishing" width="413" height="516" />
        </picture>
        <div className="cs-content">
            <span className="cs-topper">Testimonials</span>
            <h2 className="cs-title">Thousands of Happy Fish Hunters</h2>
            <p className="cs-text">
            “Outstanding store for fishing accessories! Top-notch products, user-friendly website, and excellent customer service. They truly care about anglers and provide valuable tips. Highly recommended!”
            </p>
            <div className="cs-flex-group">
            <picture className="cs-profile-wrapper">
                <img className="cs-profile" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile3.png" decoding="async" alt="profile" width="50" height="50" aria-hidden="true" />
            </picture>
            <span className="cs-name">
                Jenny Wilson
                <span className="cs-job">Fish Hunter</span>
            </span>
            </div>
        </div>
        </div>
        {/* SVG Quotes */}
        <svg className="cs-quotes" width="182" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 182 152" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)">
            <path d="M41.75 152H0L33.315 0H100.1L41.75 152ZM123.651 152h-41.75L115.214 0H182l-58.349 152Z" fill="var(--quoteColor)" />
        </g>
        <defs>
            <clipPath id="a">
            <path fill="#fff" d="M0 0h182v152H0z" />
            </clipPath>
        </defs>
        </svg>
        <picture className="cs-background">
        {/* Mobile and Tablet Image */}
        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg" />
        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg" />
        <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/coast.jpg" alt="coast" width="1280" height="568" />
        </picture>
    </section>
    );
}


export default ReviewPage