import React from 'react'
import './Footer.style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="wrapper">
          <div className="details">
            <h1>Pygimaru.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur distinctio minima ducimus voluptate nulla libero odio
              illo quod commodi dolores saepe facilis, deleniti quis eligendi
              perspiciatis id quos omnis? Placeat.
            </p>
          </div>
          <div className="links">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="products">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="copyright text-center py-1.5">
          <p>Copyright 2024@ kariukimikael.com - All Right Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer