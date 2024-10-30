import React from 'react'
import cartImage from '../../assets/cart.jpg'

export const CartWidget = () => {
  return (
    <>
    <button>
      <img src={cartImage} alt="Cart"/>
      <p>7</p>
    </button>
 
    </>
  )
}

