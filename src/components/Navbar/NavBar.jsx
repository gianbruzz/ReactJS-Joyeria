import React from 'react'
import { CartWidget } from './CartWidget'
import '../../styles/styles.css'

export const NavBar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-logo">Joyería</div>
        <div className='navbar-center'>
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#anillos">Anillos</a></li>
          <li><a href="#pulseras">Pulseras</a></li>
          <li><a href="#relojeria">Relojería</a></li>
          <li><a href="#aros">Aros</a></li>
          <li><CartWidget /></li>

        </ul>
        </div>
      </nav>

    </>

  )
}
