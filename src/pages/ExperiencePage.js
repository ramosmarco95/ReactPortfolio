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
          I am a customer service professional with seven years in the service industry over five of those years in a busy airport setting.
             In my previous position as an Airline Ground/Customer service professional with Horizon Air, I took on a number of duties daily including answering customer questions and helping people with their inquiries.
              I am familiar with common computer software used in the airline industry and I am adept at learning new skills quickly.<br/>
               I discover my passion for coding while working for Horizon Air. 
               The technology use in the Airline industry made me question the “how” airline programs are built. 
               This desire to learn coding made me pursue a career as a Software Developer.
            I am enrolled in the Software Development Program at College of Western Idaho. I am planning to obtain an Associate Degree in Software Development at the end of Spring 2025. With a background in airline customer service and a growing passion for software development, particularly in CSharp and web technologies such as HTML, CSS, JavaScript, React, and Vue, I am eager to contribute to your team and further develop my skills in a professional environment.

            <br/>While my experience in software development is at a growing level, I have been actively learning and building projects in CSharp and various web technologies. I have a solid foundation in HTML, CSS, and JavaScript, and I am proficient in using frameworks such as React and Vue to create interactive and responsive web applications. I am eager to continue learning and expanding my skills in these areas, and I am excited about the opportunity to contribute to projects.
          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              Clean Work
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              Attention To Detail
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              Punctual
            </li>
            <li className="cs-li">
              <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Why-Choose/yellow-check.svg" alt="checkmark" width="27" height="27" />
              Quality Guaranteed
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
