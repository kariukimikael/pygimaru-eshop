import React from 'react'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import './Header.style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="navbar flex justify-between items-center position-relative">
        <div className="logo">
          <h1>Pygimaru</h1>
        </div>
        <ul className="nav-links sm:flex gap-2 md:position-absolute">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-icons flex gap-2">
          <div className="wishlist-icon">
            <BsHeart />
          </div>
          <div className="cart-icon">
            <BsCart />
          </div>
          <div className="user-icon">
            <Link to="/auth">
              <BiUser />
            </Link>
          </div>
        </div>
      </div>
      <div className="search-bar sm:max-w-[400px]">
        <input type="text" placeholder="Search for products..." />
        <button>
          <BsSearch />
        </button>
      </div>
    </header>
  )
}

export default Header
