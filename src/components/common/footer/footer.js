import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer class="page-footer bg-light font-small pt-4">
        {/* <!-- Footer Links --> */}
        <div class="container-fluid  text-md-center">
          {/* <!-- Grid row --> */}
          <div class="row">
            {/* <!-- Grid column --> */}
            <div class="col-md-6 mt-md-0 mt-3">
              {/* <!-- Content --> */}
              <NavLink className="navbar-brand ms-5 fs-2" to="/">
                <span
                  className="theme-logo-p1"
                  style={{ fontFamily: "showcard_Gothic" }}
                >
                  COVI
                </span>
                <span className="theme-logo-p2">Help</span>
              </NavLink>
              <p className="m-3">26/2 Subash Lane, Vidisha</p>
            </div>
            {/* <!-- Grid column --> */}

           
            {/* <!-- Grid column --> */}
            <div class="col-md-3 mb-md-0 mb-3">
              {/* <!-- Links --> */}

              <ul className="list-unstyled  ">
                <li>
                  <NavLink
                    to="/about"
                    className="text-decoration-none text-start"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-decoration-none text-start"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-decoration-none text-start">
                    Terms and conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            
              {/* <!-- Links --> */}
              <div className="col-1 col-md-1 ps-md-0 ">
                <NavLink
                  to="#"
                  target="_blank"
                  className="footer_icons d-inline-flex text-decoration-none "
                >
                  {/* <Facebook /> */}
                  <p className="me-md-0 me-2 text-decoration-none">Facebook</p>
                </NavLink>
                <NavLink
                  to="#"
                  target="_blank"
                  className="footer_icons d-inline-flex text-decoration-none"
                >
                  {/* <Twitter /> */}
                  <p className="me-md-0 me-2 text-decoration-none">Twitter</p>
                </NavLink>
                <NavLink
                  to="#"
                  target="_blank"
                  className="footer_icons d-inline-flex text-decoration-none"
                >
                  {/* <Instagram /> */}
                  <p className="me-md-0 me-2 text-decoration-none">Instagram</p>
                </NavLink>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        
        {/* <!-- Footer Links --> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center  py-3">
          © 2021 Copyright:
          <NavLink to="/" className="text-decoration-none">
            {" "}
            COVIHelp
          </NavLink>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer -->    */}
    </>
  );
}
