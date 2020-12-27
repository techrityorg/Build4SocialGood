import React from "react";
import { Link } from "react-router-dom";
import "./CampaignItem.css";

function CampaignItem({
  name,
  campaignImage,
  targetAmount,
  repaymentPeriod,
  currentAmountPer,
  currentAmount,
  amountLeft,
  campaignerImage,
}) {
  return (
    <div className="mb-4 campaignItem">
      <div className="campaign-image">
        <img src={campaignImage} alt="" />
      </div>
      <div className="campaign-details">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className="d-flex">
            <div className="campaigner-img">
              <img src={campaignerImage} alt="" width="40" height="40" />
            </div>
            <h2 className="campaign-title">{name}</h2>
          </div>

          <p className="target-amount">₦ {targetAmount}</p>
        </div>
        <div className="loan-progress mb-4">
          <div className="progress mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${currentAmountPer}%` }}
              aria-valuenow={currentAmountPer}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="current-amount">N {currentAmount}</span>
            <span className="amount-left">N {amountLeft}</span>
          </div>
        </div>
        <div className="repayment__period d-flex justify-content-between">
          <p>Proposed Repayment Period:</p>
          <span className="ml-5">
            <strong>{repaymentPeriod} Months</strong>
          </span>
        </div>
        <Link to="view-campaign/2" className="invest-button mt-4">
          <button className="btn btn-primary">Invest Now</button>
        </Link>
      </div>
    </div>
  );
}

export default CampaignItem;
