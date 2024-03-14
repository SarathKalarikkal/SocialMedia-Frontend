import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function MainLayout(props) {

   return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        Instagram
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/login'} className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
          <Link to={'/signup'} className="nav-link">SignUp</Link>
          </li>          
        </ul>
      </div>
    </div>
  </nav>
 {props.children}

    </>
  )
}

export default MainLayout
