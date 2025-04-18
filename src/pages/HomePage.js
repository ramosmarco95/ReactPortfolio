import React from 'react';
import  '../css/homeIndex.css'
import Hero from '../components/Hero.js'

function HomePage() {
  return (
    <>
    <Hero/>
    <section id="hero-229">
      <div className="cs-container">
        <div className="cs-flex-group">
          <span className="cs-topper">Keep Practicing Code</span>
          <h1 className="cs-title">Explore this Portfolio!</h1>
          <p className="cs-text">I believe that practicing code leads to improvement.</p>
        </div>
      </div>

      {/* Background Image */}
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background-m.jpg" />
        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background.jpg" />
        <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background.jpg" alt="mountains" width="2250" height="1500" aria-hidden="true" />
      </picture>
    </section>
    </>
    
  );
}

export default HomePage;