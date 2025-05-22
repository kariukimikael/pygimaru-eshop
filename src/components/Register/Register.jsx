import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
const Register = ({ switchToLogin }) => {
  // TODO: Error handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="form-wrapper flex flex-col gap-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <fieldset>
          <input
            {...register('username', { required: true })}
            placeholder="Enter Full Name"
          />
        </fieldset>

        {/* Email Input */}
        <fieldset>
          <input
            {...register('email', { required: true })}
            placeholder="Enter Email"
          />
        </fieldset>

        {/* Password Input */}
        <fieldset>
          <input
            {...register('password', { required: true, min: 8 })}
            type="password"
            placeholder="Enter Password"
          />
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
