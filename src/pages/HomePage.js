import React from 'react';
import homeIndex from '../css/homeIndex.css'

function HomePage() {
  return (
    <section id="hero-229">
      <div className="cs-container">
        <div className="cs-flex-group">
          <span className="cs-topper">Keep Practicing Code</span>
          <h1 className="cs-title">Explore this Portfolio!</h1>
          <p className="cs-text">
            Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Nibh tortor id aliquet lectus proin nibh condimentum.
          </p>
        </div>
      </div>

      {/* Background Image */}
      <picture className="cs-picture">
        <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background-m.jpg" />
        <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background.jpg" />
        <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Hero/Background.jpg" alt="mountains" width="2250" height="1500" aria-hidden="true" />
      </picture>
    </section>
  );
}

export default HomePage;