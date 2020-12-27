import React from "react";

import CampaignPicture from "../../assets/tractor-image.jpg";
import CampaignerImg from "../../assets/user-image.png";
import Footer from "../../shared/components/Footer";
import CampaignItem from "../components/CampaignItem";
import Navbar from "../components/Navbar";

import "./LendingMarket.css";

const campaignData = [
  {
    name: "Musa Haruna",
    age: 32,
    loanAmount: 50000,
    currentAmount: 35000,
    amountLeft: 15000,
    currentAmountPer: 70,
    proposedRepaymentTime: 9,
    campaignPic: CampaignPicture,
  },
  {
    name: "Idi Audu",
    age: 52,
    loanAmount: 30000,
    currentAmount: 15000,
    amountLeft: 15000,
    currentAmountPer: 50,
    proposedRepaymentTime: 3,
    campaignPic: CampaignPicture,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
    currentAmountPer: 56,
    proposedRepaymentTime: 6,
    campaignPic: CampaignPicture,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
    currentAmountPer: 56,
    proposedRepaymentTime: 6,
    campaignPic: CampaignPicture,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
    currentAmountPer: 56,
    proposedRepaymentTime: 6,
    campaignPic: CampaignPicture,
  },
  {
    name: "Ngozi John",
    age: 25,
    loanAmount: 80000,
    currentAmount: 45000,
    amountLeft: 25000,
    currentAmountPer: 56,
    proposedRepaymentTime: 6,
    campaignPic: CampaignPicture,
  },
];
function LendingMarket() {
  return (
    <>
      <div className="lending-market-lender mt-4">
        <header>
          <h1 className="mb-2">Ongoing Campaigns</h1>
          <div className="d-flex justify-content-end mb-3">
            <div className="sort-by d-flex">
              Sort by:{" "}
              <div className="ml-3 d-flex">
                <svg id="sort" viewBox="0 0 16 12">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.08773 3.80392L12.0124 0.167367C12.2556 -0.0557899 12.6498 -0.0557899 12.893 0.167367L15.8177 3.80392C16.0608 4.02707 16.0608 4.38888 15.8177 4.61204C15.5745 4.8352 15.1803 4.8352 14.9371 4.61204L13.0753 2.31727L13.0753 12L11.8301 12L11.8301 2.31727L9.96827 4.61204C9.72511 4.8352 9.33088 4.8352 9.08773 4.61204C8.84458 4.38888 8.84458 4.02707 9.08773 3.80392Z"
                    fill="inherit"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.9123 8.19608L3.98761 11.8326C3.74445 12.0558 3.35022 12.0558 3.10707 11.8326L0.182375 8.19608C-0.060779 7.97293 -0.060779 7.61112 0.182375 7.38796C0.425529 7.1648 0.819758 7.1648 1.06291 7.38796L2.9247 9.68273L2.9247 -1.67285e-07L4.16997 -1.17329e-07L4.16997 9.68273L6.03176 7.38796C6.27492 7.1648 6.66915 7.1648 6.9123 7.38796C7.15545 7.61112 7.15545 7.97293 6.9123 8.19608Z"
                    fill="inherit"
                  ></path>{" "}
                </svg>
                <span className="ml-2">Relevant</span>
              </div>
              <div className="ml-3 d-flex">
                <svg id="clock" viewBox="0 0 378.311 378.311">
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="inherit"
                      d="M189.156,0C84.858,0,0.001,84.858,0.001,189.155c0,104.298,84.857,189.155,189.155,189.155    c104.304,0,189.154-84.857,189.154-189.155C378.31,84.858,293.46,0,189.156,0z M189.156,347.144    c-87.117,0-157.988-70.87-157.988-157.988c0-87.115,70.871-157.988,157.988-157.988c87.117,0,157.986,70.873,157.986,157.988    C347.142,276.273,276.272,347.144,189.156,347.144z"
                    ></path>{" "}
                    <path
                      fill="inherit"
                      d="M204.739,182.963V75.841c0-8.606-6.977-15.584-15.583-15.584c-8.605,0-15.582,6.978-15.582,15.584v113.314    c0,4.839,2.25,9.101,5.703,11.962c0.146,0.176,0.245,0.373,0.397,0.546l58.438,66.354c3.082,3.49,7.381,5.279,11.701,5.279    c3.652,0,7.33-1.276,10.289-3.888c6.461-5.692,7.084-15.537,1.398-21.998L204.739,182.963z"
                    ></path>{" "}
                  </g>{" "}
                </svg>
                <span className="ml-2">Any time</span>
              </div>
            </div>
          </div>
        </header>

        <main>
          {campaignData.map((campaign, index) => {
            return (
              <CampaignItem
                name={campaign.name}
                targetAmount={campaign.loanAmount}
                repaymentPeriod={campaign.proposedRepaymentTime}
                campaignImage={campaign.campaignPic}
                campaignerImage={CampaignerImg}
                currentAmountPer={campaign.currentAmountPer}
                currentAmount={campaign.currentAmount}
                amountLeft={campaign.amountLeft}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default LendingMarket;
