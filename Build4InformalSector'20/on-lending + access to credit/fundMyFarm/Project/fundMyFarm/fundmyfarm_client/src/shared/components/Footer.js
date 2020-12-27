import React from "react";

import LogoWhite from "../../assets/logo-white.png";
import FacebookWhite from "../../assets/Footer/facebook-white.png";
import LinkedinWhite from "../../assets/Footer/linkedin-white.png";
import TwitterWhite from "../../assets/Footer/twitter-white.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-wrapper d-flex justify-content-between">
        <div className="company-logo-n-socials footer-item">
          <div className="logo-white">
            <img src={LogoWhite} alt="logo-white img" />
          </div>
          <div className="socials d-flex">
            <img src={FacebookWhite} alt="facebook logo" />
            <img src={TwitterWhite} alt="twitter logo" />
            <img src={LinkedinWhite} alt="linkedin logo" />
          </div>
        </div>
        <div className="supportetc footer-item">
          <ul>
            <li>Support</li>
            <li>FAQS</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="homeetc footer-item">
          <ul>
            <li>Home</li>
            <li>Links</li>
            <li>Blog</li>
            <li>Feed Us</li>
          </ul>
        </div>
        <div className="contactusetc footer-item">
          <ul>
            <li>Contact Us</li>
            <li>Acessibility</li>
            <li>Privacy and Security</li>
          </ul>
        </div>
        <div className="newsletter footer-item">
          <p>
            Get to know updates in the field of mechanized agriculture and know
            how often our tractors are hired.
          </p>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            />
            <span class="input-group-btn">
              <button class="btn btn-theme text-white" type="submit">
                Subscribe Me
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="copy-right">
        Copyright ©2020 FundMyFarm. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
