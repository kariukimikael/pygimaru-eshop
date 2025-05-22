import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActiveLink.styles.css';
const ActiveLink = ({ to, children, ...props }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'active-link' : ' ')}
    >
      {children}
    </NavLink>
  )
}

export default ActiveLink
