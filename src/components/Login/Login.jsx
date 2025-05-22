import React, { useState } from 'react'
import './Login.styles.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
const Login = ({ switchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="form-wrapper flex flex-col gap-2">
      {/* Google Login Button */}
      <button
        className="bg-blue-700 text-black flex gap-2 justify-center items-center"
        type="button"
      >
        <FcGoogle className="text-2xl" />
        Login With Google
      </button>

      {/* Separator */}
      <div className="separator">
        <div className="line"></div>
        <h3>Or</h3>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <fieldset>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter Email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </fieldset>

        {/* Password Input */}
        <fieldset>
          <div className="password-field">
            <input
              {...register('password', { required: 'Password is required' })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <div className="pass-reset">
            <p>Forgot Password?</p>
          </div>
        </fieldset>

        {/* Login Button */}
        <button className="submit-btn" type="submit">
          Login
        </button>
        <span className="form-links">
          Don't Have An Account? <span></span>
          <Link className="text-blue-600 underline" onClick={switchToRegister}>
            Create New Account
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
