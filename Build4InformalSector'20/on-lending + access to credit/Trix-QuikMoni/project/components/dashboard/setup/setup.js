import React, { useState } from "react";

const Setup = () => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    bvn: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div className="process">
      {step === 1 ? (
        <div className="step_1">
          <h5 className="heading">
            👋 Hey there,
            <br /> let’s setup your Quikmoni account
          </h5>
          <p className="text-gray mb-3">
            Kindly provide the correct information
          </p>
          <input
            className="form-input"
            placeholder="Enter your BVN"
            name="bvn"
            type="number"
            value={info.bvn}
            onChange={handleChange}
          />
          <p className="text-gray">Why do I need to input my BVN?</p>
        </div>
      ) : step === 2 ? (
        <div className="step_1">
          <h5 className="heading mb-2">BVN Accepted</h5>
          <h5 className="heading text-gray">
            It will take 24 hours to verify your account
          </h5>
        </div>
      ) : null}
      {step > 0 && (
        <div className="btn-holder">
          {step !== 2 && (
            <button className="btn btn-outline" onClick={() => setStep(0)}>
              Prev
            </button>
          )}
          {step !== 2 ? (
            <button
              className="btn btn-primary"
              disabled={info.bvn === ""}
              onClick={() => setStep(2)}
            >
              Next
            </button>
          ) : (
            <button
              className="btn btn-primary"
              disabled={info.bvn === ""}
              onClick={() => setStep(0)}
            >
              Finish!
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Setup;
