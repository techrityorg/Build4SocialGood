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
    currentAmountPer: 70,
  },
  {
    name: "Idi Audu",
    age: 52,
    loanAmount: 30000,
    currentAmount: 15000,
    amountLeft: 15000,
    currentAmountPer: 50,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
    currentAmountPer: 56,
  },
];

const theData = [
  {
    loanId: 224,
    amount: 30000,
    rate: 3,
    term: 10,
    return: 39000,
    due: "31-09-2021",
    status: "Active",
  },
  {
    loanId: 224,
    amount: 30000,
    rate: 3,
    term: 10,
    return: 39000,
    due: "31-09-2021",
    status: "Active",
  },
  {
    loanId: 224,
    amount: 30000,
    rate: 3,
    term: 10,
    return: 39000,
    due: "31-09-2021",
    status: "Active",
  },
  {
    loanId: 224,
    amount: 30000,
    rate: 3,
    term: 10,
    return: 39000,
    due: "31-09-2021",
    status: "Active",
  },
];

function Overview({
  name = "Umar Farouq",
  totalInvestment = 120000,
  repaidAmount = 70000,
  remainingAmount = 50000,
  numberofInvestment = 4,
  averageInvestment = 39000,
  averageInterest = 3,
}) {
  return (
    <div className="lender-dashboard">
      <main className="mt-5">
        <h1>
          Welcome Back, <span> {name}</span>
        </h1>
        <div className="campaign-list">
          <p className="section-name">
            Campaingn available for investing.
            <Link to="/campaigns">View More </Link>
          </p>
          <div className="campaigns-container d-flex justify-content-between mb-5">
            {campaignData.map((campaign, index) => {
              return (
                <div key={index} className="campaign-item px-3 py-4">
                  <div className="basic-info">
                    <div className="profile-photo">
                      <img src="" alt="" />
                    </div>
                    <div className="name-n-age d-flex flex-column">
                      <p className="name mb-0">{campaign.name}</p>
                      <span className="age">{campaign.age}</span>
                    </div>
                  </div>
                  <p className="loan-amount">
                    <b>Loan amount: N {campaign.loanAmount}</b>
                  </p>

                  <div className="loan-progress mb-4">
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${campaign.currentAmountPer}%` }}
                        aria-valuenow={`${campaign.currentAmountPer}`}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="current-amount">
                        N {campaign.currentAmount}
                      </span>
                      <span className="amount-left">
                        N {campaign.amountLeft}
                      </span>
                    </div>
                  </div>

                  <div className="invest-button">
                    <button className="btn btn-primary">Invest Now</button>
                  </div>
                </div>
              );
            })}
            <div className="campaign-item d-flex align-items-center justify-content-center">
              View more
            </div>
          </div>
        </div>
        <div className="investment-portfolio mb-5">
          <p className="section-name">Here is your portfolio overview.</p>
          <div className="d-flex justify-content-between">
            <div className="portfolio-unit">
              <div className="portfolio-column d-flex justify-content-between">
                <div className="portfolio-item total-investment px-3 py-3">
                  <p className="portfolio-title">Invested Amount</p>
                  <p className="amount-title">{totalInvestment}</p>
                </div>
                <div className="portfolio-item repaidAmount px-3 py-3">
                  <p className="portfolio-title">Repaid Amount</p>
                  <p className="amount-title">{repaidAmount}</p>
                </div>
                <div className="portfolio-item remainingAmount px-3 py-3">
                  <p className="portfolio-title">Remaining Amount</p>
                  <p className="amount-title">{remainingAmount}</p>
                </div>
              </div>
              <div className="portfolio-column d-flex justify-content-between mt-2">
                <div className="portfolio-item number-of-investment px-3 py-3">
                  <p className="portfolio-title">Investments</p>
                  <p className="amount-title">{numberofInvestment}</p>
                </div>
                <div className="portfolio-item average-investment px-3 py-3">
                  <p className="portfolio-title">Average Investment</p>
                  <p className="amount-title">{averageInvestment}</p>
                </div>
                <div className="portfolio-item average-interest px-3 py-3">
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
            <thead class="thead-green">
              <tr>
                <th scope="col">LOAN</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">INTEREST RATE</th>
                <th scope="col">TERM</th>
                <th scope="col">TOTAL RETURNS</th>
                <th scope="col">PAYMENT DUE</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {theData.map((loandata, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{loandata.loanId}</th>
                    <td>{loandata.amount}</td>
                    <td>{loandata.rate}</td>
                    <td>{loandata.term}</td>
                    <td>{loandata.return}</td>
                    <td>{loandata.due}</td>
                    <td>{loandata.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Overview;
