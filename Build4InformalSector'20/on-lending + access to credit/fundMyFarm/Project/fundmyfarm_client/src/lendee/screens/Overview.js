import React from "react";
import { Link } from "react-router-dom";

import Portfolio from "../../assets/Lender/Portfolio.png";
import Income from "../../assets/Lender/Income.png";
import Expense from "../../assets/Lender/Expense.png";
import Perc from "../../assets/Lender/Percent.png";

import SmallRectangle from "../../assets/Lender/small-rectangle.svg";
import SmallRectangleGray from "../../assets/Lender/small-rectangle-gray.svg";
import "./Overview.css";

function Overview({
  name = "Umar Farouq",
  loanedAmount = 120000,
  paidAmount = 70000,
  pendingAmount = 50000,
  interestRate = 4,
  amountPerMonth = 9000,
  interestPerMonth = 300,
  totalTerm = 10,
  remainingTerm = 3,
  portfolio = { remaining: 41.7, repaid: 58.3 },
}) {
  return (
    <main className="lendee-dashboard">
      <h1>
        Welcome Back, <span> {name}</span>
      </h1>
      <div className="overview-top d-flex justify-content-between">
        <div className="d-flex">
          <div className="credit-score mr-5">
            <p className="label">Credit Score</p>
            <span>{3.86}</span>
          </div>
          <div className="total-loan">
            <p className="label">Total Loan Balance</p>
            <span>N {50000}</span>
          </div>
        </div>
        <div className="loan-chart">
          <Link to="/lendee/new">New Campaign</Link>
        </div>
      </div>
      <div className="overview-mid d-flex justify-content-between">
        <div className="social-share px-3 py-2">
          <h3>Promote your campaign to reach a wider audience</h3>
          <p>
            Promoting your campaign gives your it more visibility and enables
            you to be more acessible to potential investors or funders from
            other mediums.
          </p>
          <div className="social-div d-flex">
            <span>Promote your campain through:</span>
            <div className="list ml-3">
              <Link to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.633 7.997C19.646 8.172 19.646 8.346 19.646 8.52C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6201 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7077C4.9679 15.207 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4488 4.29647 12.9543 3.70762 12.2337C3.11876 11.513 2.79769 10.6106 2.799 9.68V9.63C3.336 9.929 3.959 10.116 4.619 10.141C4.06609 9.77358 3.61272 9.27502 3.29934 8.68979C2.98596 8.10456 2.82231 7.45085 2.823 6.787C2.823 6.039 3.022 5.353 3.371 4.755C4.38314 6.00002 5.6455 7.01856 7.07634 7.74466C8.50717 8.47075 10.0746 8.88821 11.677 8.97C11.615 8.67 11.577 8.359 11.577 8.047C11.5767 7.51796 11.6807 6.99406 11.8831 6.50524C12.0854 6.01642 12.3821 5.57227 12.7562 5.19819C13.1303 4.8241 13.5744 4.52741 14.0632 4.32508C14.5521 4.12274 15.076 4.01873 15.605 4.019C16.765 4.019 17.812 4.505 18.548 5.291C19.4498 5.11661 20.3145 4.78742 21.104 4.318C20.8034 5.24881 20.1738 6.0381 19.333 6.538C20.1328 6.44678 20.9144 6.23645 21.652 5.914C21.1011 6.7171 20.4185 7.42134 19.633 7.997Z"
                    fill="#046307"
                  />
                </svg>
              </Link>
              <Link to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00401 22L3.35601 17.032C2.46515 15.5048 1.99711 13.768 2.00001 12C2.00001 6.47699 6.47701 1.99999 12 1.99999C17.523 1.99999 22 6.47699 22 12C22 17.523 17.523 22 12 22C10.2328 22.0028 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.30799C8.26188 7.31601 8.13569 7.35002 8.02001 7.40799C7.91153 7.46942 7.81251 7.54622 7.72601 7.63599C7.60601 7.74899 7.53801 7.84699 7.46501 7.94199C7.09542 8.42299 6.89662 9.01341 6.90001 9.61999C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.778 16.2225 15.9058 16.1491 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.275C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.95499 10.279 9.75999 10.217 9.60899C9.93701 8.92499 9.64701 8.24399 9.34901 7.56799C9.29001 7.43399 9.11501 7.33799 8.95601 7.31899C8.90201 7.31299 8.84801 7.30699 8.79401 7.30299C8.65972 7.29632 8.52515 7.29766 8.39101 7.30699V7.30799Z"
                    fill="#046307"
                  />
                </svg>
              </Link>
              <Link to="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.565 20.9972V12.8012H16.33L16.741 9.59217H13.565V7.54817C13.565 6.62217 13.823 5.98817 15.152 5.98817H16.836V3.12717C16.0166 3.03936 15.193 2.99696 14.369 3.00017C11.925 3.00017 10.247 4.49217 10.247 7.23117V9.58617H7.5V12.7952H10.253V20.9972H13.565Z"
                    fill="#046307"
                  />
                </svg>
              </Link>
              <Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7.99999H4C2.897 7.99999 2 8.89699 2 9.99999V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V9.99999C16 8.89699 15.103 7.99999 14 7.99999Z"
                    fill="#046307"
                  />
                  <path
                    d="M20 1.99999H10C9.46957 1.99999 8.96086 2.21071 8.58579 2.58578C8.21071 2.96085 8 3.46956 8 3.99999V5.99999H16C16.5304 5.99999 17.0391 6.21071 17.4142 6.58578C17.7893 6.96085 18 7.46956 18 7.99999V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V3.99999C22 3.46956 21.7893 2.96085 21.4142 2.58578C21.0391 2.21071 20.5304 1.99999 20 1.99999Z"
                    fill="#046307"
                  />
                </svg>
              </Link>
              <Link>Copy Link</Link>
            </div>
          </div>
        </div>
        <div className="add-files px-3 py-2">
          <h3>Add materials to improve your legitimacy</h3>
          <p>
            Cosider including documents or materials that can reassure potential
            funders that you’re capable of repaying the loan. These could be
            pictures or text documents.
          </p>
          <p>You’ve added 2 files. Click the bars to view files.</p>
          <button className="btn btn-secondary">Add files</button>
        </div>
      </div>
      <div className="credit-portfolio mb-5 mt-5">
        <p className="section-name">Here is your portfolio overview.</p>

        <div className="credit-unit">
          <div className="credit-column d-flex justify-content-between mb-5">
            <div className="credit-item d-flex pending-amount align-items-center">
              <div className="portfolio-img">
                <img src={Portfolio} alt="portfolio img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Pending Amount</p>
                <p className="amount-title mb-0">{pendingAmount}</p>
              </div>
            </div>
            <div className="credit-item d-flex align-items-center loanedAmount">
              <div className="portfolio-img">
                <img src={Income} alt="income img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Loaned Amount</p>
                <p className="amount-title mb-0">{loanedAmount}</p>
              </div>
            </div>
            <div className="credit-item d-flex align-items-center paidAmount">
              <div className="portfolio-img">
                <img src={Expense} alt="expence img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Paid Amount</p>
                <p className="amount-title mb-0">{paidAmount}</p>
              </div>
            </div>
            <div className="credit-item d-flex align-items-center interest-rate">
              <div className="portfolio-img">
                <img src={Expense} alt="expence img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Interest Rate</p>
                <p className="amount-title mb-0">{interestRate}</p>
              </div>
            </div>
          </div>
          <div className="portfolio-column d-flex justify-content-between">
            <div className="portfolio-item d-flex amountpermonth align-items-center">
              <div className="portfolio-img">
                <img src={Portfolio} alt="investment img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Amount per month</p>
                <p className="amount-title mb-0">{amountPerMonth}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center interest-per-month">
              <div className="portfolio-img">
                <img src={Perc} alt="invest img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Interest per month</p>
                <p className="amount-title mb-0">{interestPerMonth}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center totalTerm">
              <div className="portfolio-img">
                <img src={Perc} alt="invest img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Total term</p>
                <p className="amount-title mb-0">{totalTerm}</p>
              </div>
            </div>
            <div className="portfolio-item d-flex align-items-center remainingTerm">
              <div className="portfolio-img">
                <img src={Perc} alt="interest img" />
              </div>
              <div className="portfolio-info">
                <p className="portfolio-title">Remaining Terms</p>
                <p className="amount-title mb-0">{remainingTerm}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;
