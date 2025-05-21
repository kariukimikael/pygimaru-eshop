import React from 'react'
import './Footer.style.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-section shop-info">
          <h2>Pygimaru Eshop</h2>
          <p>
            Welcome to Pygimaru Eshop — your destination for quality and style.
            Discover unique products and creative fashion every season.
          </p>
        </div>

        <div className="footer-section footer-links">
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section social-links">
          <h2>Get in Touch</h2>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/kariukimikael"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kariukimikael"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kariukimikael"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
          <p>
            +254-700-000-000 <br />
            kariukimikael@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
