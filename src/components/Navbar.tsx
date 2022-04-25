import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Bad Bank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='/createaccount'>Create Account</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actions
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/deposit'>Deposit</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" to='/withdraw'>Withdraw</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/alldata'>All Data</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar