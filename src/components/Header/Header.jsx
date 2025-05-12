import React from 'react'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import './Header.style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1>Pygimaru.</h1>
        </Link>
        <nav>
          <ul className="navlinks">
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <button type="button">
            <BsSearch />
          </button>
          <button type="button">
            <BsCart />
          </button>
          <button type="button">
            <BsHeart />
          </button>
          <button type='button'>
            <Link to="/auth">
              <BiUser />
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
