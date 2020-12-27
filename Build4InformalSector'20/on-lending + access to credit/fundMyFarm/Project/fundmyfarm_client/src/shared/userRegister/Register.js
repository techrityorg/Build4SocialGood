import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Investor from "../../assets/UserRegister/investor.png";
import Farmer from "../../assets/UserRegister/lendee.png";
import Footer from "../components/Footer";

import "./Register.css";

function Register(props) {
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [userType, setUserType] = useState([
    { type: "lender" },
    { type: "lendee" },
  ]);
  const [activeUserType, setActiveUserType] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [farm, setFarm] = useState("");
  const [password, setPassword] = useState("");

  // handle button click of login form
  const handleSignUp = (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);

    axios
      .post("/auth/signup", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          setLoader(false);
          //   setUserSession(response.data.token, response.data.user);
          props.history.push("/dashboard");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  const { type } = userType[activeUserType];
  console.log(type);
  console.log(activeUserType);
  return (
    <div id="user-register">
      <header>
        <nav class="navbar">
          <Link to="/" class="navbar-brand" href="#">
            <img src={Logo} width="221" height="60" alt="logo" loading="lazy" />
          </Link>
        </nav>
      </header>
      <main>
        <div className="signup-header text-center">
          <h1>Be part of the Agricultural Reform. Join us today</h1>
          <p>You will never regret it.</p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="register-img d-flex align-items-center">
            {activeUserType ? (
              <img src={Farmer} alt="img" />
            ) : (
              <img src={Investor} alt="img" />
            )}
          </div>
          <div className="form-container w-full">
            <div className="change-status d-flex justify-content-between">
              {userType.map((user, index) => {
                return (
                  <div className={`${user.type} w-50 text-center`} key={index}>
                    <button
                      type="button"
                      className="py-3 mb-2 btn btn-link"
                      onClick={() => setActiveUserType(index)}
                    >
                      {user.type}
                      {console.log(activeUserType)}
                    </button>
                    <div className={`show-active`}></div>
                  </div>
                );
              })}
            </div>
            {activeUserType ? (
              <form className="userreg-form" onSubmit={handleSignUp}>
                <div class="form-group">
                  <label for="nameInput">NAME</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="emailInput">EMAIL</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="username@domain.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="phoneInput">PHONE NUMBER</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneInput"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="farmInput">FARM SIZE</label>
                  <input
                    type="text"
                    class="form-control"
                    id="farmInput"
                    placeholder="Your farm size"
                    name="farm"
                    value={farm}
                    onChange={(e) => setFarm(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="passwordInput">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="agreedTC"
                  />
                  <span class="form-check-label" for="agreedTC">
                    I have read and agree to the
                    <span>
                      <Link to="/terms-condition">Terms and Conditions</Link>
                    </span>
                    and
                    <span>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </span>
                  </span>
                </div>
                <div className="buttons-container text-center">
                  <button type="submit" className="text-white">
                    Create account
                  </button>
                </div>
              </form>
            ) : (
              <form className="userreg-form" onSubmit={handleSignUp}>
                <div class="form-group">
                  <label for="nameInput">NAME</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="emailInput">EMAIL</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="username@domain.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="phoneInput">PHONE NUMBER</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phoneInput"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="passwordInput">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="agreedTC"
                  />
                  <span class="form-check-label" for="agreedTC">
                    I have read and agree to the
                    <span>
                      <Link to="/terms-condition">Terms and Conditions</Link>
                    </span>
                    and
                    <span>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </span>
                  </span>
                </div>
                <div className="buttons-container text-center">
                  <button type="submit" className="text-white">
                    Create account
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
