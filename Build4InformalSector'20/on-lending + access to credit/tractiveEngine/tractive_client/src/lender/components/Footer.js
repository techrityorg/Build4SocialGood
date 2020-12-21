import React from "react";

import Facebook from "../../assets/Footer/brandico_facebook.svg";
import Instagram from "../../assets/Footer/ant-design_instagram-outlined.svg";
import Twitter from "../../assets/Footer/ant-design_twitter-outlined.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="investor-footer container-fluid bg-fml-primary pt-4 pt-md-5 pb-3 mt-5">
      <div className="footer-li container">
        <div className="row mx-0 d-none d-md-flex mb-3">
          <a href="#" className="footer-logo">
            <img
              src="../../img/logo-footer.svg"
              alt=""
              width="154px"
              height="80px"
            />
          </a>
        </div>
        <div className="row flex-column flex-md-row footer-links mx-0 justify-content-center justify-content-md-between text-center text-md-left">
          <ul className="nav d-flex address flex-column order-3 order-md-1 whyn mt-4 pt-4 pt-md-0 mt-md-0">
            <li>
              <a href="#">23, Kano, Nigeria</a>
            </li>
            <li>
              <a href="#">info@fundmyfarm.com</a>
            </li>
            <li>
              <a href="#">09023144819</a>
            </li>
          </ul>
          <ul className="nav flex-column mt-md-3 order-1 order-md-2">
            <li>
              <a href="about-us.html">Why choose fundmyfarm?</a>
            </li>
            <li>
              <a href="about-us.html">How P2P lending works</a>
            </li>
          </ul>
          <ul className="nav flex-column mt-md-3 order-2 order-md-3">
            <li>
              <a href="about-us.html">About fundmyfarm</a>
            </li>
            <li>
              <a href="contact-us.html">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="row mx-0 mt-4 mt-md-2 pt-4 pt-md-5 social-footer-icons-container text-center justify-content-center justify-content-md-start">
          <ul className="nav social-footer-icons">
            <li>
              <a href="">
                <img src={Facebook} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={Instagram} />
              </a>
            </li>
            <li>
              <a href="">
                <img src={Twitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-4 mt-md-3 text-light">
        <div className="row flex-column flex-md-row mx-0 credits-container pt-3 justify-content-md-between justify-content-center">
          <p className="mb-0 text-center text-md-left">
            2020 &copy; Copyright All Rights Reserved
          </p>

          <ul className="nav bye">
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms-conditions.html">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
