import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  align-items-center">
  <div className="container-fluid">
    <NavLink className="navbar-brand fs-2" to="/"><span className="theme-logo-p1" style={{fontFamily: "showcard_Gothic"}}>COVI</span><span className="theme-logo-p2">Help</span></NavLink>
    <button className="navbar-toggler navbar-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <form className="d-flex ms-4 w-50">
        <input className="form-control w-75 me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav nav-menu  mb-2  mb-lg-0 align-items-center justify-content-end">
        <li className="nav-item px-3">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/contact">Contac Us </NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/contact">Log In</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link" to="/contact">Create Account</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
<hr className="nav-hr-line"/>
        </>
    )
}
