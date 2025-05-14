import React from 'react'
import { Login, Register } from '../../components'
import './AuthPage.css'
const AuthPage = () => {
  return (
    <div className="form-group sm:max-w-[400px] h-screen">
      {/* <Login /> */}
      <Register />
    </div>
  )
}

export default AuthPage