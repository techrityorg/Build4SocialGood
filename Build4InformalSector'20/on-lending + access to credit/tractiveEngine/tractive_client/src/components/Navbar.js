// navbar component
import React, { useEffect, useState, Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Redirect } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
import userImg from '../assets/user1.png';

export default class MainNavbar extends Component  {
    constructor() {
        super();
        this.state = {
          agents: [],
        }

      }

//   logout = () => {
//     // e.preventDefault();
//       localStorage.clear();
//     //   localStorage.removeItem('JWT');
//       window.location = "/login"
//     };

    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        // localStorage.removeItem('JWT');
        window.location = "/login"
      };

    render() {
        const {
            email,
            }  = this.state
            let data = this.state.agents;
        return (
        <Navbar bg="success" expand="lg" >
        {/* <Navbar.Brand className="navbar-brand font-weight-bolder text-light ml-5 mr-4 nav-text-head tractive-logo" href="/">Tractive</Navbar.Brand> */}
        <NavLink className="navbar-brand font-weight-bolder text-light ml-5 mr-4 nav-text-head tractive-logo" to="/">
            TractiveEngine
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto">

        <NavDropdown className="text-white" bg="success"  title="Our Services" id="basic-nav-dropdown">
        <li className="nav-item">
             <NavLink className="nav-link text-success font-weight-bold" to="/iot-center">IoT Center
             </NavLink>
         </li>
         <li className="nav-item">
             <NavLink className="nav-link text-success font-weight-bold" to="/farmer-center">Connecting farmers to fleets
             </NavLink>
         </li>
         <li className="nav-item">
             <NavLink className="nav-link text-success font-weight-bold" to="/lending-page">Lending Services
             </NavLink>
         </li>
         <li className="nav-item">
             <NavLink className="nav-link text-success font-weight-bold" to="/market-place">Market Place
             </NavLink>
         </li>
        </NavDropdown>

              <li className="nav-item">
                    <NavLink
                        className="nav-link text-light font-weight-bold" activeClassName="is-active" to={localStorage.user?"/fleets":"/protect-route"}>Fleets
                        <span class="sr-only">(current)</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link text-light font-weight-bold" activeClassName="is-active" to="/contact-us">Contact Us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light font-weight-bold " to="/about">About Us
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link text-light font-weight-bold" to="/post-fleet">Post Fleet
                    </NavLink>
                </li> */}

           {localStorage.JWTA ?
                <NavDropdown className="text-white profile-detail nav-for-profile"  title={<span> <img  className="img-thumbnail profile_image_navbar"
                src={localStorage.image?localStorage.image: userImg}  alt="user" /> {localStorage.name}</span>  } id="basic-nav-dropdown" style={{color: "white"}}>

                <li className="nav-item nav-for-profile" >
                      <NavLink className="nav-link text-success font-weight-bold" to={`/profile-agent/${localStorage.email}`}>Profile
                      </NavLink>
                  </li>
                  <li className="nav-item nav-for-profile"  onClick={this.logout}>
                      <NavLink className="nav-link text-success font-weight-bold" to="/login">Logout
                      </NavLink>
                  </li>
              </NavDropdown>
            : null}

           {localStorage.JWTF ?
                <NavDropdown className="text-white profile-detail nav-for-profile"  title={<span> <img  className="img-thumbnail profile_image_navbar"
                src={localStorage.image?localStorage.image: userImg}  alt="user" /> {localStorage.name}</span>  } id="basic-nav-dropdown" style={{color: "white"}}>

                <li className="nav-item nav-for-profile" >
                      <NavLink className="nav-link text-success font-weight-bold" to={`/profile-farmer/${localStorage.email}`}>Profile
                      </NavLink>
                  </li>
                  <li className="nav-item nav-for-profile"  onClick={this.logout}>
                      <NavLink className="nav-link text-success font-weight-bold" to="/login">Logout
                      </NavLink>
                  </li>
              </NavDropdown>
            : null
             }

           {localStorage.JWTO ?
                <NavDropdown className="text-white profile-detail nav-for-profile"  title={<span> <img  className="img-thumbnail profile_image_navbar"
                src={localStorage.image?localStorage.image: userImg}  alt="user" /> {localStorage.name}</span>  } id="basic-nav-dropdown" style={{color: "white"}}>

                <li className="nav-item nav-for-profile" >
                      <NavLink className="nav-link text-success font-weight-bold" to={`/profile-owner/${localStorage.email}`}>Profile
                      </NavLink>
                  </li>
                  <li className="nav-item nav-for-profile"  onClick={this.logout}>
                      <NavLink className="nav-link text-success font-weight-bold" to="/login">Logout
                      </NavLink>
                  </li>
              </NavDropdown>
            : null }
            {!localStorage.user &&
                  <NavDropdown className="text-white"  title="Login" id="basic-nav-dropdown">
              <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/login-farmer">Farmer
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/login-owner">Fleet Owner
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/login-agent">Agent
                    </NavLink>
                </li>
            </NavDropdown>
             }
             { !localStorage.user &&
               <NavDropdown className="text-white" bg="success"  title="Join Us" id="basic-nav-dropdown">
               <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/farmer-register">Farmer
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/owner-register">Fleet Owner
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-success font-weight-bold" to="/agent-register">Agent
                    </NavLink>
                </li>
             </NavDropdown>
             }
        </ul>
          {/* <Nav className="mr-auto">
          </Nav> */}
          {/* <Form inline> */}
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
           {/* <NavLink> */}
              {/* <Button href="/fleets" variant="outline-light">Search Fleets</Button> */}
             {/* </NavLink>  */}
          {/* </Form> */}
        </Navbar.Collapse>
      </Navbar>
      );
  }
}
// export default MainNavbar;
