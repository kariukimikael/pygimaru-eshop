import React from 'react'
import './Login.styles.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = ({ switchToRegister }) => {
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
            {...register('email', { required: true })}
            placeholder="Email"
          />
        </fieldset>

        {/* Password Input */}
        <fieldset>
          <input
            {...register('password', { required: true, min: 8 })}
            type="password"
            placeholder="Password"
          />
          <div className="form-links text-left!">
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
