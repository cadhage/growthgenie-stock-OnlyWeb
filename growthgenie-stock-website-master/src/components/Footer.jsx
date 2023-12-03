import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
} from "react-icons/fa"; // Assuming you're using Font Awesome for icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Company name and social media links */}
      <div className="footer-content">
        <div className="social-media">
          {/* Social media icons with links */}
          <a
            href="https://www.linkedin.com/in/cadhage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/cadhage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/cadhage44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        {/* Updated company name */}
        <p>
          &copy; {new Date().getFullYear()} Team Jazba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
