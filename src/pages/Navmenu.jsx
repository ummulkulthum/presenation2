import React from 'react'
import { Link } from 'react-router-dom/dist';

function Navmenu() {
  return (
        <nav className="navbar navbar-expand-md bg-success  shadow-sm">

            <div className="container-xxl">
                <Link to="/" className="navbar-brand">
                    <span className="fw-bold text-white">Online Agriculture Shop </span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                          <Link to="/" className="nav-link text-white">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/review" className="nav-link text-white">REVIEW</Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link to="/signup" className="nav-link text-white">LOGIN</Link>
                        </li>
                        <li className="nav-item ms-2 d-none d-md-inline" >
                            <Link to="/signup" className="btn btn-outline-success text-white">SIGN IN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

  )
}

export default Navmenu