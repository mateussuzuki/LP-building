import React from "react";
import "../src/css/navbar.scss";

export const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4 p-0">
        <div class="container-fluid white p-2 d-flex justify-content-between">
          <span class="navbar-brand mb-0 h1 ms-5">
            <h5 className="m-0">Kons</h5>
          </span>
          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};
