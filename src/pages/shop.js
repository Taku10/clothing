import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/shop.css'
import Products from '../components/Products'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { ProductContext } from '../App'
import { useContext } from 'react';

const Shop = (props) => {
  const data = useContext(ProductContext)




  return (
    <>
      <div className="shop-container">
        <div className='shop-path'>
          <div className='link'>
            <p><Link to='/'>Home</Link></p>
            <span>/</span>
            <p >Shop</p>
          </div>
        </div>
        <div className='shop-section'>
          <div className='section-wrapper'>
            <div className="right-items">
             
              <div className='products-container'>
                <Products/>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    
    </>
  )
}

export default Shop