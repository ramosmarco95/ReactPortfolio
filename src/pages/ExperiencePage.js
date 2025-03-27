import React from 'react';
import '../css/contactIndex.css'
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (

    <>
      <section id="why-choose-37">
      <div className="cs-container">
        {/* Right Image */}
        <picture className="cs-picture">
          <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb-m.jpg" />
          <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg" />
          <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/lightbulb.jpg" alt="lightbulbs on a wire" width="858" height="781" />
        </picture>
        <div className="cs-content">
          <span className="cs-topper">Why Choose Me?</span>
          <h2 className="cs-title">Take a moment to hear about me!...</h2>
          <p className="cs-text">
          I discovered my passion for coding while working in the airline industry. Seeing the technology behind airline operations sparked my curiosity about how these systems are built, leading me to pursue a career in software development.

Currently, I am enrolled in the Software Development Program at the College of Western Idaho and plan to earn my Associate Degree in Software Development by Spring 2025. My primary focus is on becoming a backend developer, specializing in building robust and scalable server-side applications. I am particularly interested in working with C#, ASP.NET Core, and SQL to develop efficient and secure backend systems. I enjoy solving complex problems, optimizing database performance, and ensuring seamless communication between front-end applications and backend services. While I am continuously learning and refining my skills, I am eager to contribute to a development team where I can grow as a backend developer and help build impactful software solutions.

            <br/>While my experience in software development is at a growing level, I have been actively learning and building projects in CSharp and various web technologies. I have a solid foundation in HTML, CSS, and JavaScript, and I am proficient in using frameworks such as React and Vue to create interactive and responsive web applications. I am eager to continue learning and expanding my skills in these areas, and I am excited about the opportunity to contribute to projects.
          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              CLEAN WORK
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              ATTENTION TO DETAIL
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              PUNTUAL
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              .NET MAUI 
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              ASP.NET Core MVC
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              SQL SERVER
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              C#
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              PYTHON
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              JAVASCRIPT
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              REACT
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              VUE
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              TOOL MANAGEMENT
            </li>
          </ul>
          <Link to="/contact_form" className="cs-button-solid">Contact Me</Link>
        </div>
      </div>
    </section>

    <ContactForm/>
    </>
    

    
  );
 
}

export default ContactPage;
