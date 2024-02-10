import logo from "./round_HACCS_logo.png";
import njit from "./njit.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";


const footer = () => {
  return (
    <>
    <head>
      <title>Footer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <div className="footer-container">
      <div className="contact-logo">
        <div className="indent"> </div>
        <img className="njit-logo" src={njit} alt="NJIT Logo"></img>
        <img className="HACCS-logo" src={logo} alt="HACCS Logo"></img>
        <div className="rectangle"> | </div>
        <div className="text-container">
          <h1>Contact Us</h1>
          <p>njithaccs@gmail.com</p>
          <h1>Follow Us</h1>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/njit_haccs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/njit-haccs-679151296/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://discord.gg/2SnC6xsqAZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>© 2023 NJIT HACCS</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default footer;
