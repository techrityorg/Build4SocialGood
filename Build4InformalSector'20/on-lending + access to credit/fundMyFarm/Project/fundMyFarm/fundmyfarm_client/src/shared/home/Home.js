import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../assets/hero.png";
import Problem from "../../assets/problem.png";
import Solution from "../../assets/solution.png";
import Result from "../../assets/result.png";
import Rectangle from "../../assets/rectangle.svg";
import SeedPlant from "../../assets/seed-plant.png";
import Farm from "../../assets/farm.png";
import Quote from "../../assets/quote.svg";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <HomeNav />
      <main>
        <section className="mt-3" id="hero">
          <div className="row hero-div">
            <div className="col-md-6 hero-content py-5">
              <h1 className="hero-heading mt-2">
                A Flexible and Riskless Farming Lending System!
              </h1>
              <p className="mb-3">
                FundMyFarm is a platform that connects smallholder farmers to
                lenders. We connect farmers with those who love farming and want
                to lend part of their resources to help grow farmers as they
                also grow at the same time.
              </p>
              <p>
                We help you grow doing what you love while helping others doing
                it for you. How will you feel helping others grow while making
                earning at same time? Definitely good! That is why we are here
              </p>
              <div className="getting-started-btn mt-4">
                <Link
                  to="/register"
                  type="button"
                  className="btn btn-primary text-white"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="col-md-6 hero-image">
              <img src={Hero} className="img-fluid" alt="Hero img" />
            </div>
          </div>
        </section>
        <section id="why-us">
          <h2 className="section-header text-center">Why FundMyFarm ?</h2>
          <div className="d-flex why-us-container justify-content-between">
            <div className="the-problem why-us-item text-center">
              <img src={Problem} alt="problem img" />
              <h3>The Problem</h3>
              <p>
                Smallholder farmers don’t have access to credit facility they
                need to fully cultivate their land and flourish. Formal
                financial institutions are virtually nonexistent.
              </p>
            </div>
            <div className="the-solution why-us-item text-center">
              <img src={Solution} alt="solution img" />
              <h3>The Solution</h3>
              <p>
                To address credit availability, we came up with a platform that
                connects farmers looking for credit with farm lovers looking to
                lend thier resources to grow together with farmers.
              </p>
            </div>
            <div className="the-expected-result why-us-item text-center">
              <img src={Result} alt="Expected result img" />
              <h3>The Expected Result</h3>
              <p>
                With this solution, we believe we can confront food insecurity
                in africa and improve the livelihoods of hundreds of millions of
                people.
              </p>
            </div>
          </div>
        </section>
        <section id="our-process">
          <h2 className="section-header text-center">Our process</h2>
          <div className="lenders-process">
            <div className="process-title d-flex align-items-center">
              <img src={Rectangle} alt="process" /> <div>Lenders</div>
            </div>
            <div className="lenders-step process-steps d-flex justify-content-between">
              <div className="step-item step-1 text-center">
                <h3>Step 1</h3>
                <p>
                  Click the Get started link above or the signup link below,
                  fill the online form
                </p>
                <div className="text-left pl-2">
                  <Link to="/register" className="process-step-link">
                    Sign up
                  </Link>
                </div>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 2</h3>
                <p>
                  Check the lendee requesters' list in the dashboard for
                  suitable lendees
                </p>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 3</h3>
                <p>
                  Fill the contract lending form in the dashboard. Kindly read
                  the lending agreement.
                </p>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 4</h3>
                <p>
                  Wait for legal department approval and sigining of final
                  documents
                </p>
                <img src={SeedPlant} alt="process step img" />
              </div>
            </div>
          </div>
          <div className="lendees-process">
            <div className="process-title d-flex align-items-center">
              <img src={Rectangle} alt="process" />{" "}
              <div>
                Lendees <span>(Farmers)</span>
              </div>
            </div>
            <div className="lendees-steps process-steps d-flex justify-content-between">
              <div className="step-item text-center">
                <h3>Step 1</h3>
                <p>
                  Click the Get started link above or the signup link below,
                  fill the online form or request fund through our agent
                </p>
                <div className="text-left pl-2">
                  <Link to="/register" className="process-step-link">
                    Sign up
                  </Link>
                </div>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 2</h3>
                <p>Check the lenders list in the dashboard</p>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 3</h3>
                <p>
                  Fill the contract lending form in the dashboard. Kindly read
                  the lending agreement.
                </p>
                <img src={SeedPlant} alt="process step img" />
              </div>
              <div className="step-item text-center">
                <h3>Step 4</h3>
                <p>
                  Wait for legal department approval and sigining of final
                  documents
                </p>
                <img src={SeedPlant} alt="process step img" />
              </div>
            </div>
          </div>
        </section>
        <section id="quotes">
          <div className="quotes-content text-center mx-auto">
            <img src={Quote} alt="quote img" width="80" height="80" />
            <h3>Farming Is The New Gold </h3>
            <p>
              Agricultural sector contributes 25% of Nigeria’s Gross Domestic
              Product (GDP) and accounts for 48% of the labour force. The
              sector’s growth rate over the last 5 years averaged 4%.{" "}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
