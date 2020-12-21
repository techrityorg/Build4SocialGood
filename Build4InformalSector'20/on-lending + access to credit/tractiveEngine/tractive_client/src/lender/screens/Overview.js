import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "./Overview.css";

const campaignData = [
  {
    name: "Musa Haruna",
    age: 32,
    loanAmount: 50000,
    currentAmount: 35000,
    amountLeft: 15000,
  },
  {
    name: "Idi Audu",
    age: 52,
    loanAmount: 30000,
    currentAmount: 15000,
    amountLeft: 15000,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
  },
];

function Overview({
  name = "Umar Farouq",
  totalInvestment,
  repaidAmount,
  remainingAmount,
  numberofInvestment,
  averageInvestment,
  averageInterest,
}) {
  return (
    <div className="lender-dashboard">
      <main>
        <h1>
          Welcome Back, <span> {name}</span>
        </h1>
        <div className="campaign-list">
          <p className="section-name">
            Campaingn available for investing.
            <Link to="/campaigns">View More </Link>
          </p>
          <div className="campaigns-container d-flex">
            {campaignData.map((campaign) => {
              return (
                <div className="campaign-item mr-3">
                  <div className="basic-info">
                    <div className="profile-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="name-n-age d-flex flex-column">
                      <p className="name">{campaign.name}</p>
                      <span className="age">{campaign.age}</span>
                    </div>
                  </div>
                  <p className="loan-amount">{campaign.loanAmount}</p>

                  <div className="loan-progress"></div>
                  <div className="d-flex justify-content-between">
                    <span className="current-amount">
                      {campaign.currentAmount}
                    </span>
                    <span className="amount-left">{campaign.amountLeft}</span>
                  </div>
                  <div className="invest-button">
                    <button className="btn btn-primary">Invest Now</button>
                  </div>
                </div>
              );
            })}
            <div className="campaign-item">View more</div>
          </div>
        </div>
        <div className="investment-portfolio">
          <p className="section-name">Here is your portfolio overview.</p>
          <div className="d-flex">
            <div className="portfolio-unit">
              <div className="row">
                <div className="col-md-4 total-investment">
                  <p className="portfolio-title">Invested Amount</p>
                  <p className="amount-title">{totalInvestment}</p>
                </div>
                <div className="col-md-4 repaidAmount">
                  <p className="portfolio-title">Repaid Amount</p>
                  <p className="amount-title">{repaidAmount}</p>
                </div>
                <div className="col-md-4 remainingAmount">
                  <p className="portfolio-title">Remaining Amount</p>
                  <p className="amount-title">{remainingAmount}</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4 number-of-investment">
                  <p className="portfolio-title">Investments</p>
                  <p className="amount-title">{numberofInvestment}</p>
                </div>
                <div className="col-md-4">
                  <p className="portfolio-title">Average Investment</p>
                  <p className="amount-title">{averageInvestment}</p>
                </div>
                <div className="col-md-4">
                  <p className="portfolio-title">Average Interest</p>
                  <p className="amount-title">{averageInterest}</p>
                </div>
              </div>
            </div>
            <div className="portfolio-chart">pie chart</div>
          </div>
        </div>
        <div className="account-overview">
          <p className="section-name">Here is your account overview</p>
          <table className="table">
            <thead class="thead-light">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Overview;
