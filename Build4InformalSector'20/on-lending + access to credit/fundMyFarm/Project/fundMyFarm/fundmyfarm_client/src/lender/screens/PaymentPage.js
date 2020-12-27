import React from "react";

import CampaignPicture from "../../assets/tractor-image.jpg";
import CampaignerPicture from "../../assets/user-image.png";
import "./PaymentPage.css";

const campaignInfo = {
  name: "Musa Haruna",
  loanAmount: 30000,
  campaignPicture: "",
  dateCreated: "15-09-2020",
  campaignerPicture: "",
  repaymentPeriod: 7,
};

function PaymentPage() {
  return (
    <div id="payment">
      <div className="payment-page mt-3">
        <h1>Fund {campaignInfo.name} campaign</h1>
        <p className="loan__amount_label mb-0 mt-2">Loan Amount</p>
        <p className="loan__amount_value">
          <strong>₦ {campaignInfo.loanAmount}</strong>
        </p>
        <div className="row mt-4">
          <div className="col-md-6 pr-2">
            <div className="campaign-info">
              <img
                src={
                  campaignInfo.campaignPicture
                    ? campaignInfo.campaignPicture
                    : CampaignPicture
                }
                alt="campaign img"
              />
            </div>
            <p className="date-created my-4">
              Date created: {campaignInfo.dateCreated}
            </p>
            <hr />
            <div className="campaigner-info mt-3">
              <div className="d-flex name-n-pic align-items-center mb-3">
                <img
                  src={CampaignerPicture}
                  alt="campaigner img"
                  width="80px"
                />
                <p className="campaigner-name ml-4">{campaignInfo.name}</p>
              </div>
              <p className="repayment__period">
                Proposed Repayment Period:{" "}
                <span>
                  <strong>{campaignInfo.repaymentPeriod} Months</strong>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 payment pt-3">
            <div className="payment-method mb-5 method-1 py-3 px-5 d-flex flex-column justify-content-center">
              <div className="text-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke=" #2a6b37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-globe"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <p className="method-name text-center mt-3">Swift transfer</p>
            </div>
            <div className="payment-method method-2 px-5 py-3 d-flex flex-column justify-content-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke=" #2a6b37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-credit-card"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <p className="method-name text-center mt-3">Credit/Debit card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
