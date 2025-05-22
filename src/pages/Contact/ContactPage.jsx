import React from 'react'
import './ContactPage.styles.css'
const ContactPage = () => {
  return (
    <div className='container'>
      <h1 className="text-3xl font-bold underline">Contact Page</h1>
      <p className="text-lg">Get in touch with us!</p>
      <p className="text-lg">
        We would love to hear from you. Please fill out the form below.
      </p>
      <form className="contact-form">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text" id="name" className="mb-4" />
        
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" id="email" className="mb-4" />
        
        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea id="message" rows="4" className="mb-4"></textarea>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage