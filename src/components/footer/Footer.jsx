import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebookF, FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="footer-row"> {/* Flexbox row */}
          <div className="footer-column"> {/* Flexbox column */}
            <h6 className="footer-heading text-uppercase">Information</h6>
            <ul className="list-unstyled footer-link mt-4">
              <li><a href="#">Pages</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-column"> {/* Flexbox column */}
            <h6 className="footer-heading text-uppercase">Resources</h6>
            <ul className="list-unstyled footer-link mt-4">
              <li><a href="#">Monitoring Grader</a></li>
              <li><a href="#">Video Tutorial</a></li>
              <li><a href="#">Term & Service</a></li>
              <li><a href="#">Zeeko API</a></li>
            </ul>
          </div>

          <div className="footer-column"> {/* Flexbox column */}
            <h6 className="footer-heading text-uppercase">Help</h6>
            <ul className="list-unstyled footer-link mt-4">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Terms of Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column"> {/* Flexbox column */}
            <h6 className="footer-heading text-uppercase">Contact Us</h6>
            <p className="contact-info mt-4">Contact us if you need help with anything</p>
            <p className="contact-info">+01 123-456-7890</p>
            <div className="mt-5">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#"><FaFacebookF className="footer-social-icon facebook" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><FaTwitter className="footer-social-icon twitter" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><FaGoogle className="footer-social-icon google" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><FaApple className="footer-social-icon apple" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">2019 © Aman, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
