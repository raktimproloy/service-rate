import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4" style={{background: "#2BD4BD"}}>
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/service-rate-logo.svg" alt="" style={{width: "50%"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-dark" href="#" style={{fontWeight: "bold"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/webview"} className="nav-link text-dark" href="#" style={{fontWeight: "bold"}}>Website View</Link>
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link text-dark" href="#" style={{fontWeight: "bold"}}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to={"/business-login"}>
            <button type="button" className="btn px-4 py-2 ms-2" style={{background: "black", color: "white", }}>For Business</button>
          
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default index