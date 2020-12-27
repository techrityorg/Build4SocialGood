import React, { useState } from "react";
import "./CreateCampaign.css";

const firstComponent = () => {
  return (
    <div className="component-item">
      <div class="form-group">
        <label htmlFor="campaignName">Campaign Name</label>
        <input type="text" class="form-control" id="campaignName" />
      </div>
    </div>
  );
};
const secondComponent = () => {
  return (
    <div className="component-item">
      <h2>Upload campaign image</h2>
      <p>Upload your Video in response to you campaign as this matters alot</p>
      <img src={"rule"} alt="" />

      <div class="form-group">
        <label for="campaignImage">Upload Campaign Image</label>
        <input type="file" className="form-control-file" id="campaignImage" />
      </div>
      <p>
        This is and important Aspect of this Funding. You are to expressly
        define your Purpose and intention for this Funding through this Video.
        Ensure you express yourself. We wish you Goodluck.
      </p>
    </div>
  );
};
const thirdComponent = () => {
  return (
    <div className="component-item">
      <h2>Campaign Description</h2>
      <div class="form-group">
        <label for="campaignDesc">Enter your campaign description</label>
        <textarea class="form-control" id="campaignDesc" rows="3"></textarea>
      </div>
    </div>
  );
};
const finalComponent = () => {
  return (
    <div className="component-item">
      <h2>Invite a Recommender</h2>
      <p>Fill in details for a recommender you want to invite.</p>
      <div>
        <div class="form-group">
          <label for="recommenderName">Full Name</label>
          <input type="text" class="form-control" id="recommenderName" />
        </div>
        <div class="form-group">
          <label for="recommenderEmail">Email Address</label>
          <input type="email" class="form-control" id="recommenderEmail" />
        </div>
        <div class="form-group">
          <label for="recommenderMessage">Enter your message</label>
          <textarea
            class="form-control"
            id="recommenderMessage"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

function CreateCampaign() {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "Campaign Name",
      isDone: true,
      component: firstComponent,
    },
    {
      key: "secondStep",
      label: "My Second Step",
      isDone: false,
      component: secondComponent,
    },
    {
      key: "thirdStep",
      label: "My Third Step",
      isDone: false,
      component: thirdComponent,
    },
    {
      key: "finalStep",
      label: "My Final Step",
      isDone: false,
      component: finalComponent,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps. wait for approval");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  return (
    <div id="CreateCampaign">
      <main>
        <h1 className="text-center">New Campaign</h1>
        <div className="box-outer">
          <div className="box">
            <div className="steps">
              <ul className="nav">
                {steps.map((step, i) => {
                  return (
                    <li
                      key={i}
                      className={`${
                        activeStep.key === step.key ? "active" : ""
                      } ${step.isDone ? "done" : ""}`}
                    >
                      <div>
                        Step {i + 1}
                        <br />
                        <span>{step.label}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="step-component">{activeStep.component()}</div>
            <div className="btn-component">
              <input
                type="button"
                value="Back"
                onClick={handleBack}
                disabled={steps[0].key === activeStep.key}
                className="btn btn-primary"
              />
              <input
                type="button"
                value={
                  steps[steps.length - 1].key !== activeStep.key
                    ? "Next"
                    : "Submit"
                }
                onClick={handleNext}
                className="btn btn-primary"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateCampaign;
