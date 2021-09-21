import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg align-items-center">
  <div className="container-fluid">
    <NavLink className="navbar-brand fs-2" to="/"><span className="theme-logo-p1" style={{fontFamily: "showcard_Gothic"}}>COVI</span><span className="theme-logo-p2">Help</span></NavLink>
    <button className="navbar-toggler navbar-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Link</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<hr className="nav-hr-line"/>
        </>
    )
}
