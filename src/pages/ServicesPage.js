import servicesIndex from '../css/servicesIndex.css'


import React, { useState, useEffect } from 'react';

function ServicesPage() {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll('.cs-faq-item');
    const handleClick = (event) => {
      event.currentTarget.classList.toggle('active');
    };

    items.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    setFaqItems(items);

    return () => {
      items.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section id="services-1666">
      <div className="cs-container">
        <div className="cs-image-group">
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-standing.jpeg"
              alt="people standing"
              width="605"
              height="690"
            />
          </picture>
          {/* SVG Graphic */}
          <img
            className="cs-floater"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-swirl.svg"
            alt="graphic"
            loading="lazy"
            decoding="async"
            height="710"
            aria-hidden="true"
            width="690"
          />
        </div>
        <div className="cs-content">
          <span className="cs-topper">Our Courses</span>
          <h2 className="cs-title">Stitch Center for Process Safety Training</h2>
          <p className="cs-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum accusantium fuga dolore nulla provident
            inventore possimus, incidunt, tenetur voluptate laudantium consequuntur commodi. In perferendis quod, non ad
            veniam similique assumenda deleniti nobis quaerat ipsum cum! Velit provident eligendi cumque excepturi!
          </p>
          <ul className="cs-faq-group">
            <li className="cs-faq-item">
              <button className="cs-button">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/computer-gold.svg"
                  alt="icon"
                  width="32"
                  height="32"
                />
                <span className="cs-button-text">On-Demand e-Training</span>
                <span className="cs-indicator" aria-hidden="true"></span>
              </button>
              <p className="cs-item-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat enim molestias quam, illum
                ullam ipsa repellat, necessitatibus quis cumque voluptatum nesciunt. Quia possimus est in recusandae saepe
                nostrum.
              </p>
            </li>
            <li className="cs-faq-item">
              <button className="cs-button">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/calendar-gold.svg"
                  alt="icon"
                  width="32"
                  height="32"
                />
                <span className="cs-button-text">Hybrid e-Training</span>
                <span className="cs-indicator" aria-hidden="true"></span>
              </button>
              <p className="cs-item-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat enim molestias quam, illum
                ullam ipsa repellat, necessitatibus quis cumque voluptatum nesciunt. Quia possimus est in recusandae saepe
                nostrum.
              </p>
            </li>
            <li className="cs-faq-item">
              <button className="cs-button">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold.svg"
                  alt="icon"
                  width="32"
                  height="32"
                />
                <span className="cs-button-text">Live Instructor e-Training</span>
                <span className="cs-indicator" aria-hidden="true"></span>
              </button>
              <p className="cs-item-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat enim molestias quam, illum
                ullam ipsa repellat, necessitatibus quis cumque voluptatum nesciunt. Quia possimus est in recusandae saepe
                nostrum.
              </p>
            </li>
            <li className="cs-faq-item">
              <button className="cs-button">
                <img
                  className="cs-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/map-pin-gold-2.svg"
                  alt="icon"
                  width="32"
                  height="32"
                />
                <span className="cs-button-text">Onsite Classroom Training</span>
                <span className="cs-indicator" aria-hidden="true"></span>
              </button>
              <p className="cs-item-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente placeat enim molestias quam, illum
                ullam ipsa repellat, necessitatibus quis cumque voluptatum nesciunt. Quia possimus est in recusandae saepe
                nostrum.
              </p>
            </li>
          </ul>
          <a href="" className="cs-button-solid">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;

