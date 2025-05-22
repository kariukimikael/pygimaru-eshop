import React, { useState } from 'react'
import './Register.styles.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Register = ({ switchToLogin }) => {
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
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <fieldset>
          <input
            {...register('username', { required: 'Full name required', minLength:{
              value: 3,
              message: 'Full name must be at least 3 characters long',
            } })}
            placeholder="Enter Full Name"
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </fieldset>

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
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    'Password must contain an uppercase letter',
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    'Password must contain a lowercase letter',
                  hasNumber: (value) =>
                    /[0-9]/.test(value) || 'Password must contain a number',
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*]/.test(value) ||
                    'Password must contain a special character',
                },
              })}
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
        </fieldset>

        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Create Account
        </button>

        <span className="form-links">
          Already have an account? <span></span>
          <Link className="text-blue-600 underline" onClick={switchToLogin}>
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register
