import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='form-wrapper flex flex-col gap-3'>
      <h2>Welcome Back</h2>
      <button type="button">Login With Google</button>
      <div className="separator">
        <div className="line"></div>
        <h3>Or</h3>
        <div className="line"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            {...register('email', { required: true })}
            placeholder="Email"
          />
        </fieldset>
        <fieldset>
          <input
            {...register('password', { required: true, min: 8 })}
            type="password"
            placeholder="Password"
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
