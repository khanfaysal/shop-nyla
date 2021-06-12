import React from "react";
import "./Footer.scss";
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-column-container'>
        <div className='footer-column'>
          <ul>
            <li className='column-header'>Categories</li>
            <li>Women</li>
            <li>Man</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className='footer-column'>
          <ul>
            <li className='column-header'>Help</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='footer-column'>
          <p className='column-header'>Get in touch</p>
          <p className='address'>
            Any questions? Let us know in store at 8th
            floor, 379 Hudson St, New York, NY 10018 or call
            us on (+1) 96 716 6879
          </p>
          <div className='footer-socials-icon'>
            <FontAwesomeIcon
              className='footer-facebook-icon'
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className='footer-instagram-icon'
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>
          Copyright ©{new Date().getFullYear()} All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
