import React from 'react'
import { BsCart, BsHeart, BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import './Header.styles.css'
import ActiveLink from '../ActiveLinks/ActiveLink'
import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(useGSAP)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)

    // Open Animation
    if (newState) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.inOut' }
      )
    } else {
      // Close Animation
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }

  // Set initial state of the menu
  useGSAP(() => {
    gsap.set(menuRef.current, { x: '100%', opacity: 0 })
  }, [])

  return (
    <header>
      {/* Desktop Links */}
      <nav
        className={`${
          isOpen ? 'active' : ''
        } flex justify-between items-center`}
      >
        <h1>Pygimaru</h1>
        <ul className="hidden sm:flex gap-4">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/products">Shop</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="nav-icons flex gap-3 items-center">
          <div className="wishlist-icon">
            <BsHeart />
          </div>
          <div className="cart-icon">
            <BsCart />
          </div>
          <div className="user-icon">
            <ActiveLink to="/auth">
              <BiUser />
            </ActiveLink>
          </div>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="sm:hidden">
            <div className="menu-toggle"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div ref={menuRef} className="md:hidden mobile-menu">
        <ul onClick={toggleMenu}>
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/products">Shop</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
