import React from 'react'
import './ProductsPage.styles.css'
const ProductsPage = () => {
  return (
    <div className='container'>
      <h1 className="text-3xl font-bold underline">Products Page</h1>
      <p className="text-lg">Explore our range of products!</p>
      <p className="text-lg">
        We offer a variety of products to suit your needs. Check them out below.
      </p>
      <div className="product-list">
        <div className="product-item">
          <h2 className="text-xl font-semibold">Product 1</h2>
          <p className="text-md">Description of Product 1.</p>
        </div>
        <div className="product-item">
          <h2 className="text-xl font-semibold">Product 2</h2>
          <p className="text-md">Description of Product 2.</p>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  )
}

export default ProductsPage