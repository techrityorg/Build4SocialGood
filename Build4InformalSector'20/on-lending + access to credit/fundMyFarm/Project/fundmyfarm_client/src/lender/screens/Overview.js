import React from "react";
import { Link } from "react-router-dom";

import Portfolio from "../../assets/Lender/Portfolio.png";
import Income from "../../assets/Lender/Income.png";
import Expense from "../../assets/Lender/Expense.png";
import Perc from "../../assets/Lender/Percent.png";

import SmallRectangle from "../../assets/Lender/small-rectangle.svg";
import SmallRectangleGray from "../../assets/Lender/small-rectangle-gray.svg";
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
  portfolio = { remaining: 41.7, repaid: 58.3 },
}) {
  return (
    <main className="lender-dashboard d-flex justify-content-between flex-column">
      <h1>
        Welcome Back, <span> {name}</span>
      </h1>
      <div className="campaign-list">
        <p className="section-name">
          Campaingn available for investing.
          <Link to="/lender/lending-market">View More </Link>
        </p>
        <div className="d-flex justify-content-between campaigns-container">
          <div className="campaign-items d-flex justify-content-between">
            {campaignData.map((campaign, index) => {
              return (
                <div key={index} className="campaign-item py-4">
                  <div className="basic-info">
                    <div className="name-n-age d-flex justify-content-between align-items-center">
                      <span className="name mb-0">{campaign.name}</span>
                      <span className="age">{campaign.age}</span>
                    </div>
                  </div>
                  <p className="loan-amount d-flex justify-content-between">
                    <span>Loan amount:</span>{" "}
                    <span>₦ {campaign.loanAmount}</span>
                  </p>

                  <div className="loan-progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${campaign.currentAmountPer}%` }}
                        aria-valuenow={campaign.currentAmountPer}
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

                  <Link to="view-campaign/2" className="invest-button">
                    <button className="btn btn-primary">Invest Now</button>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="view-more-campaigns d-flex align-items-center justify-content-center">
            View more
          </div>
        </div>
      </div>
      <div className="investment-portfolio mb-5">
        <p className="section-name">Here is your portfolio overview.</p>

        <div className="portfolio-unit">
          <div className="portfolio-column d-flex justify-content-between mb-5">
            <div className="portfolio-item d-flex total-investment align-items-center">
              <div className="portfolio-img">
                <img src={Portfolio} alt="portfolio img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Invested Amount</p>
                <p className="amount-title mb-0">{totalInvestment}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center repaidAmount">
              <div className="portfolio-img">
                <img src={Income} alt="income img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Repaid Amount</p>
                <p className="amount-title mb-0">{repaidAmount}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center remainingAmount">
              <div className="portfolio-img">
                <img src={Expense} alt="expence img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Remaining Amount</p>
                <p className="amount-title mb-0">{remainingAmount}</p>
              </div>
            </div>
          </div>
          <div className="portfolio-column d-flex justify-content-between">
            <div className="portfolio-item d-flex total-investment align-items-center">
              <div className="portfolio-img">
                <img src={Portfolio} alt="investment img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Investments</p>
                <p className="amount-title mb-0">{numberofInvestment}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center repaidAmount">
              <div className="portfolio-img">
                <img src={Perc} alt="invest img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Average Investmentt</p>
                <p className="amount-title mb-0">{averageInvestment}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center remainingAmount">
              <div className="portfolio-img">
                <img src={Perc} alt="interest img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Average Interest</p>
                <p className="amount-title mb-0">{averageInterest}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="repayment-chart">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${portfolio.remaining}%` }}
              aria-valuenow={portfolio.remaining}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="chart-units d-flex justify-content-center">
            <div className="remaining d-flex pr-5">
              <img src={SmallRectangle} alt="remaining img" className="pr-3" />
              <span>% {portfolio.remaining} Remaining</span>
            </div>
            <div className="repaid">
              <img src={SmallRectangleGray} alt="repaid img" className="pr-3" />
              <span>% {portfolio.repaid} Repaid</span>
            </div>
          </div>
          <p className="text-center mt-3">Investment Payment Chart</p>
        </div>
      </div>
    </main>
  );
}

export default Overview;
