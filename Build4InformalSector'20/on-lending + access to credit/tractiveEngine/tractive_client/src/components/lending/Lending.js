import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import "./lending.css";
// import Navbar from './Navbar';
import Footer from "../Footer"
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

  render() {
    return (
          <div className="">
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                    <img src="/images/lending.jpg" alt="" />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 justify-content-center text-justify">
                  <h1 className="mt-5 display-5 font-weight-bold">For flexible and riskless farming lending, Look for us </h1>
                  <p className="mt-4 ">TractiveEngine is a platform that connects smallholder farmers to lenders. We connect farmers with those
                  who love farming and want to lend part of their resources to help grow farmers as they also grow at the same time.</p>
                  <p className="mb-5">We help you grow doing what you love while helping others doing it for you.
                  How will you feel helping others grow while making making earning at same time? Definitely good! That is why we are here</p>
                  <Link to="/">
                            <button className="btn btn-success btn-sm morebtn">Get started»</button>
                  </Link>
                </div>
              </div>
             </div>
             <div className="container mt-5 mb-5">
                <h1 className="text-success font-weight-bold mb-4">Our processes </h1>
                <h2 className="text-left font-weight-bold mb-4"> <span><img className="" src="/images/line1.png" alt="" /></span> Lenders </h2>
                <div className="row d-flex">
                <div className="col-lg-3 col-sm-4 ">
                  <div className="card justify-content-center">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 1</p>
                      <p className="card-text text-justify">Click the Get started link above or the signup link below, fill the online form</p>
                      <Link to="/">
                                <button className="btn btn-light btn-lg">SignUp »</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 2</p>
                      <p className="card-text">Check the lendee requesters' list in the dashboard for suitable lendees </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 3</p>
                      <p className="card-text">Fill the contract lending form in the dashboard. Kindly read the lending agreement.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 4</p>
                      <p className="card-text">Wait for legal department approval and sigining of final documents</p>
                    </div>
                  </div>
                </div>
                </div>

                  <h2 className="text-left font-weight-bold mb-4 mt-5"> <span>
                  <img className="" src="/images/line1.png" alt="" /></span> Lendees <span className="text-success h4"> (Farmers) </span> </h2>
                <div className="row d-flex">
                <div className="col-lg-3 col-sm-4 ">
                  <div className="card justify-content-center">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 1</p>
                      <p className="card-text text-justify">Click the Get started link above or the signup link below, fill the online form or request fund through our agent</p>
                      <Link to="/">
                                <button className="btn btn-light btn-lg">SignUp »</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 2</p>
                      <p className="card-text">Check the lenders  list in the dashboard </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 3</p>
                      <p className="card-text">Fill the contract lending form in the dashboard. Kindly read the lending agreement.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title h5 font-weight-bold"> Step 4</p>
                      <p className="card-text">Wait for legal department approval and sigining of final documents</p>
                    </div>
                  </div>
                </div>
                </div>

             </div>

            <Footer />
        </div>
    );
  }
}
