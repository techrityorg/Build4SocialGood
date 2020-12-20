import React from 'react';
import Footer from "../Footer.js"
import "./IotCenter.css";


const IotCenter = () => {
  return(
    <div>
      <section className="hero_iot">
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 font-weight-bold mt-5">
          </div>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <h1 className="mt-5 display-2 text-success">TractiveEngine IoT Center</h1>
          <h2 className="font-weight-bold h1 mt-5"> Home of Internet of Things</h2>
      </div>

      <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-3 iot-card">
          <div className="card">
            <img src="/images/smarttractor.jpeg" className="card-img-top" />
            <div className="card-body">
              <p className="card-title h5 font-weight-bold"> Smart Farming</p>
              <p className="card-text">Monitor farm water level, yield performance and weather</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 iot-card">
          <div className="card">
            <img src="/images/smartfaming1.jpg" className="card-img-top" />
            <div className="card-body">
              <p className="card-title h5 font-weight-bold"> Remote Data Collection</p>
              <p className="card-text">Collect data remotely for concrete and timely decisions</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 iot-card">
          <div className="card">
            <img src="/images/tractorworking1.png" className="card-img-top" />
            <div className="card-body">
              <p className="card-title h5 font-weight-bold">Remote Fleets Tracking</p>
              <p className="card-text">Track fleets, monitor fuel level, location, traction performance and eventual immobilization</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container iot-about mb-5">
      <div className="row justify-content-center ">
        <div className="col-lg-7 col-sm-12">
          <div className="card">
            <div className="card-body">
            <p className="card-title h1 text-success font-weight-bold">About IoT Center</p>
            <p className="card-text text-justify"> TractiveEngine IoT center is the place where all IoT related activities are being carried out.
            TractiveEngine use Internet of things to track fleets location, monitor fuel level, traction and probable immobilization whenever the need arises.
            We also monitor farm water level, crop yield and weather data with our IoT devices. </p>
            <p className="card-text text-justify">The Research and Development team are working day and night to develop a next generation IoT devices
            that is tailored to the Africa agricultural system in term of affordability, weather and usage. </p>
            </div>
          </div>
        </div>
      </div>
      </div>
        <Footer />
    </div>
  )
}

export default IotCenter;
