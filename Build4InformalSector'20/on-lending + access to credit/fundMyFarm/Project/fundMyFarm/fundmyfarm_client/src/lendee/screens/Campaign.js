import React from "react";
import "./Campaign.css";

function Campaign() {
  return (
    <div id="campaign-lendee">
      <div className="d-flex">
        <div className="left w-50 pr-5">
          <div className="campaign-image">
            <img src={0} alt="" />
          </div>
          <div className="campaign-buttons d-flex justify-content-between mt-5">
            <button>End Campaign</button>
            <button>Edit Campaign</button>
            <button>Share Campaign</button>
          </div>
        </div>

        <div className="campaign-content right w-50">
          <h1 className="campaign-name">Tractor tire Purchase</h1>
          <p className="current-amount">Current Amount: 20,000</p>
          <div className="campaign-progress">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "30" }}
                aria-valuenow={60}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p>20% of 100,000</p>
          </div>

          <div className="campaign-description">
            <span>Campaign Description</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus in inventore soluta omnis molestiae ab architecto ex,
              adipisci cumque dolorem facilis quo numquam optio? Officia.
            </p>
          </div>
          <div className="funding-summary">
            <ul className="d-flex">
              <li>3 Lenders</li>
              <li>1 Donator</li>
              <li>10 Shares</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
