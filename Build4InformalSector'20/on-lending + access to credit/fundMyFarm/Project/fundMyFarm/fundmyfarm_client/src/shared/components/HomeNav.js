import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./HomeNav.css";

function HomeNav() {
  return (
    <nav className="home-navbar navbar-css navbar-expand-lg bg-white">
      <div className="container-fluid homenav-wrapper d-flex px-4 py-3">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Fund my farm logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <img className="img-fluid" src="./assets/images/navicon.png" alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active-nav">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                type="button"
                className="nav-link btn btn-primary text-white"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
