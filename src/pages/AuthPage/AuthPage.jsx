import React, { useState } from 'react'
import { Login, Register } from '../../components'
import './AuthPage.styles.css'
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const switchToLogin = () => setIsLogin(true)
  const switchToRegister = () => setIsLogin(false)

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h1>{isLogin ? 'Login' : 'Welcome Back'}</h1>
        </div>
        {isLogin ? (
          <Login switchToRegister={switchToRegister} />
        ) : (
          <Register switchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  )
}

export default AuthPage
