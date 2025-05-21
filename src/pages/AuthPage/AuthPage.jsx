import React from 'react'
import { Login, Register } from '../../components'
import './AuthPage.css'
const AuthPage = () => {
  // TODO: Add a toggle between login and register
  // TODO: Add a redirect to the home page if the user is already logged in
  // TODO: Add a redirect to the login page if the user is not logged in
  // TODO: Connect the login and register forms to the backend
  return (
    <div className="form-group sm:max-w-[400px] h-screen">
      {/* <Login /> */}
      <Register />
    </div>
  )
}

export default AuthPage