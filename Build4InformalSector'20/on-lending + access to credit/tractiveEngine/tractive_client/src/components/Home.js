import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import Rows from "./Rows"
// import Carousel from 'react-bootstrap/Carousel'
// import Navbar from './Navbar';
import Footer from "./Footer"

// Animation

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000});

  }, [])
  // render() {
    return (
      <div>
    <section className="hero mb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-white font-weight-bold ">
            <h3 className="display-3 font-weight-bold text-dark">Welcome to <span className="text-success m-5">TractiveEngine</span> </h3>
            <div className="hero-left m-5">
              <p className="mt-4 h5 text-success font-weight-bold"> <span className="text-dark font-weight-bold h1">TractiveEngine</span>  is an economic sharing platform that connects fleets owners to farmers looking for fleets such as tractor;</p>
              <p className="mt-4 h5 text-success font-weight-bold"> A marketing platform that connects farmers to customers across various locations, be it state, region, country or continent;</p>
              <p className="mt-4 h5 text-success font-weight-bold"> We render Internet of things (IOT) services to fleet owners, farmers and logistic companies across all locations;</p>
              <p className="mt-4 h5 text-success font-weight-bold"> And storage facility service for farmers pending while the successful connection are made between them and their customers.</p>
              <br/>
              <Link to="/about">
                        <button className="btn btn-success btn-large morebtn">Learn more »</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-white font-weight-bold hero-right">
          </div>
        </div>
      </div>
    </section>
    <Rows />
    <Footer />
   </div>
    )
  // }
}
export default Home;
