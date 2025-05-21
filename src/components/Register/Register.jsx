import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
const Register = () => {
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
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            {...register('username', { required: true })}
            placeholder="Enter Full Name"
          />
        </fieldset>
        <fieldset>
          <input
            {...register('email', { required: true })}
            placeholder="Enter Email"
          />
        </fieldset>
        <fieldset>
          <input
            {...register('password', { required: true, min: 8 })}
            type="password"
            placeholder="Enter Password"
          />
        </fieldset>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default Register
