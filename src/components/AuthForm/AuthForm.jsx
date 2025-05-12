import React from 'react'
import './AuthForm.style.css'
const AuthForm = () => {
  return (
    <div>
      <form action="" className='flex flex-col gap-2 items-center justify-center'>
        <h2 className='text-2xl text-black'>Login</h2>
        <input type="email" name="" id="" placeholder="Email" />
        <input type="password" name="" id="" placeholder="Password" />
        <button type="submit" className='form-btn'>Sign In</button>
      </form>
    </div>
  )
}

export default AuthForm