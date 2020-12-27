import React, { useState, useEffect } from "react";
import { InputMoney } from "../../formats/money";
import Slider from "react-input-slider";
import Modal from "../../modal/modal";
import store from "../../../store/store";
import { useProxy } from "valtio";
import firebase from "../../../services/firebase";
import { snapshot } from "valtio";
const tenure = [
  {
    amount: 2,
    rate: 12.3,
  },
  {
    amount: 4,
    rate: 12.3,
  },
  {
    amount: 8,
    rate: 12.8,
  },
];

const Process = ({ close }) => {
  const snapshot = useProxy(store);
  const [sent, setSent] = useState(false);
  const [loanSlider, setSlider] = useState(5);
  const [loanInfo, setInfo] = useState({
    amount: 5000,
    tenure: 0,
    payment: 5000,
    rate: 0,
  });

  const setTenure = (amount, rate) => {
    setInfo({
      ...loanInfo,
      tenure: amount,
      rate,
    });
  };

  const requestLoan = () => {
    store.loading = true;
    firebase
      .database()
      .ref("userinfo/" + snapshot.user.uid)
      .set({
        ...snapshot.userInfo,
        amountborrowed: loanInfo.amount,
        tenure: loanInfo.tenure,
        rate: loanInfo.rate,
        payment_due: loanInfo.payment,
      })
      .then(() => {
        store.loading = false;
        setSent(true);
      });
  };

  useEffect(() => {
    setInfo({
      ...loanInfo,
      amount: loanSlider * 1000,
    });
  }, [loanSlider]);

  useEffect(() => {
    if (loanInfo.rate != 0) {
      setInfo({
        ...loanInfo,
        payment: Math.floor(
          (loanInfo.rate / 100) * loanInfo.amount + loanInfo.amount
        ),
      });
    }
  }, [loanInfo.tenure, loanInfo.amount]);
  return (
    <div className="process">
      <span className="back text-mini" onClick={close}>
        <img src={require("../../../public/assets/go_back.svg")} />
        Go Back
      </span>
      <div className="content">
        <p className="sub-heading">Select loan amount</p>
        <p className="text-gray mb-2 text-normal">
          Move the slider to select loan amount
        </p>
        <div className="loan-amount">
          <p className="sub-heading">NGN {InputMoney(loanInfo.amount)}</p>
        </div>
        <div className="slider mb-1">
          <Slider
            axis="x"
            xmax={50}
            xmin={5}
            x={loanSlider}
            onChange={({ x }) => setSlider(x)}
            className="range-slider"
            styles={{
              track: {
                backgroundColor: "",
              },
              active: {
                backgroundColor: "#fff",
              },
              thumb: {
                width: 25,
                height: 25,

                backgroundColor: "#028e29",
              },
            }}
          />
          <div className="display-amount mt-1">
            <p className="text-gray text-mini">5,000</p>
            <p className="text-gray text-mini ">50,000</p>
          </div>
        </div>
        <p className="sub-heading">Select loan tenure</p>
        <p className="text-gray mb-2 text-normal">
          When would you like to pay back
        </p>
        <div className="tenure">
          {tenure.map((ten) => (
            <div
              key={ten.amount}
              onClick={() => setTenure(ten.amount, ten.rate)}
              className={
                ten.amount === loanInfo.tenure ? "selected" : undefined
              }
            >
              {ten.amount} weeks
            </div>
          ))}
        </div>
        <p className="mt-3" style={{ marginBottom: "0" }}>
          {loanInfo.tenure != 0 && (
            <>
              {" "}
              Interest: {loanInfo.rate}% - NGN {InputMoney(loanInfo.payment)}.00
            </>
          )}
        </p>
      </div>
      <button className="btn btn-primary mt-3" onClick={requestLoan}>
        Send Request
      </button>
      {sent && (
        <Modal close={close}>
          <div className="pop-message">
            <img
              src={require("../../../public/assets/happy_face.svg")}
              height={90}
              width={90}
            />
            <p className="sub-heading mt-2">Request Success</p>
            <p className="text-gray mt-1">
              Your application was successful! You will be notified soon.
            </p>
            <button className="btn btn-primary mt-2" onClick={close}>
              Back to Home
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Process;
