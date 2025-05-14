import React from 'react'
import './Footer.style.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="shop-info">
          <h2>Pygimaru Eshop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum
            ratione alias vel beatae architecto totam eveniet enim consectetur
            magnam maiores excepturi voluptas
          </p>
        </div>
        <div className="footer-links">
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
        <div className="social-links">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/kariukimikael" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kariukimikael" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kariukimikael" target="_blank">
                <FaTwitter />
              </a>
            </li>
          </ul>
          <p>
            +254-700-000-000 <br /> kariukimikael@gmail.com{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
