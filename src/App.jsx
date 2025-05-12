import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ProductsPage, HomePage, ContactPage, AboutPage, AuthPage } from './pages'
import { Footer, Header } from './components'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App