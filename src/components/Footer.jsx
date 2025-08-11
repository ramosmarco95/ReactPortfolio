import React from 'react';
import '../css/footerIndex.css'
import { Link } from 'react-router-dom';
import marco_logo from '../assets/marco-logo-no-bg.png'

function Footer() {
  return (
    <footer id="cs-footer-269">
      <div className="cs-container">
        {/* Logo Group */}
        <div className="cs-logo-group">
          <Link aria-label="go back to home" className="cs-logo" to="/">
          <img src={marco_logo} style={{ height: "40px", borderRadius: "25%", backgroundColor: "beige"  }} alt='logo'/>
          </Link>
          <p className="cs-text">
          A passionate software developer who enjoys building clean, reliable, and user-friendly applications. Whether it’s a web app, mobile project, or backend system, I approach every project with curiosity, care, and a commitment to learning. This portfolio is a small collection of what I’ve created so far, and I'm always excited about what’s next.
          </p>
        </div>
        {/* Links */}
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Sitemap</span>
          </li>
          <li className="cs-nav-li">
            <Link className="cs-nav-link" to="/">Home</Link>
          </li>
          <li className="cs-nav-li">
            <Link className="cs-nav-link" to="/about">About</Link>
          </li>
          <li className="cs-nav-li">
            <Link className="cs-nav-link" to="/experience">Experience</Link>
          </li>
          <li className="cs-nav-li dropdown ">
            <Link className="cs-nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </Link>
            <ul className="dropdown-menu">
             
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143vueproject2/" target="-blank">Project02 Vue Framework</Link></li>
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143reactproject3/" target="-blank">Project03 React Framework</Link></li>
              <li><Link className="dropdown-item" to="https://ramosmarco95.github.io/swdv143angularproject4/" target="-blank">Project04 Angular Framework</Link></li>
              <li><hr className="dropdown-divider"></hr></li>
             
            </ul>
          </li>
            <li className="cs-nav-li dropdown">
              <Link className="cs-nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Sign In</Link></li>
                <li><Link className="dropdown-item" to="#">Contact Form</Link></li>
                <li><Link className="dropdown-item" to="#">Blog</Link></li>
                <li><Link className="dropdown-item" to="#">404</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
               
              </ul>
            </li>
        </ul>
        {/* Contact Info */}
        <ul className="cs-contact">
          <li className="cs-nav-li">
            <span className="cs-header">Contact</span>
          </li>
          <li className="cs-contact-li">
            <a className="cs-contact-link" href="tel:208-412-0338">(208) 412-0338</a>
          </li>
          <li className="cs-contact-li">
            <a className="cs-contact-link" href="mailto:tva.variant09@gmail.com">tva.variant09@gmail.com</a>
          </li>
          {/* Social Media */}
          <li className="cs-contact-li cs-social-group">
            <div className="cs-social">
              <a className="cs-social-link" aria-label="visit google profile" href="https://google.com">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/google.svg" alt="google" width="11" height="11" />
              </a>
              <a className="cs-social-link" aria-label="visit facebook profile" href="https://facebook.com">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/Facebook.svg" alt="facebook" width="6" height="11" />
              </a>
              <a className="cs-social-link" aria-label="visit instagram profile" href="https://instagram.com">
                <img className="cs-social-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Social/instagram.svg" alt="instagram" width="11" height="11" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
