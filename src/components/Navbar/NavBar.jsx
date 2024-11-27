import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css"


const NavBar = () => {
  return (
    <>
      <nav className="navbar">
      <Link to="/">
        <div className="logo-container">
         <img className="logo" src="/img/logo-sophie.png" alt="" />
        </div>
        </Link>
        <ul className="navbar-links">
          <li className=" ">
            <Link to="/category/anillos">Anillos</Link>
          </li>
          <li className="">
            <Link to="/category/pulseras">Pulseras</Link>
          </li>
          <li className="">
            <Link to="/category/aros">Aros</Link>
          </li>
          <li className="">
            <Link to="/category/cadenas">Cadenas</Link>
          </li>
        </ul>

        
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar
