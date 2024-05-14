import React from "react";
import '../src/css/navbar.scss'

export const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4 p-0">
        <div class="container-fluid white p-2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
