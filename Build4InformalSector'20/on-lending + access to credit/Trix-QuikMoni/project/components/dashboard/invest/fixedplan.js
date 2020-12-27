import React, { useState, useEffect } from "react";
import { InputMoney, parseMoney } from "../../formats/money";
import Payment from "../borrow/payment";
import Modal from "../../modal/modal";
import firebase from "../../../services/firebase";
import store from "../../../store/store";
import { useProxy } from "valtio";
import { publicKey } from "../../../services/userService";
import { PaystackButton } from "react-paystack";

const FixedPlan = ({ close }) => {
  const snapshot = useProxy(store);
  const [investInfo, setInvest] = useState({
    amount: "",
    investment: "0",
    start_date: new Date(),
    rate: 25,
    plan: "fixed",
    maturity_date: null,
  });

  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);

  const addInvestment = () => {
    console.log(investInfo);
    store.loading = true;
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    firebase
      .database()
      .ref("userinfo/" + snapshot.user.uid + "/investments")
      .push()
      .set({
        ...investInfo,
        amount: Number(parseMoney(investInfo.amount)),
        start_date: new Date().toString(),
        maturity_date: new Date(year + 1, month, day).toString(),
        period: 12,
      })
      .then(() => {
        console.log("saved");
        store.loading = false;
        setSent(true);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInvest({
      ...investInfo,
      [name]: InputMoney(value),
    });
  };

  const dateFormat = (date_value) => {
    let date = date_value;
    let month = date?.toLocaleString("default", { month: "short" });
    // console.log(investInfo.start_date.getMonth());
    if (date) {
      return `${month} ${date.getDate()}, ${date.getFullYear()}`;
    }
  };

  const setMaturity = () => {
    let d = investInfo.start_date;
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let mature_day = new Date(year + 1, month, day);
    setInvest({
      ...investInfo,
      maturity_date: mature_day,
    });
  };

  useEffect(() => {
    setMaturity();
  }, [step]);

  useEffect(() => {
    setInvest({
      ...investInfo,
      investment:
        parseMoney(investInfo.amount) * 0.25 +
        Number(parseMoney(investInfo.amount)),
    });
    setProps({
      ...componentProps,

      amount: parseMoney(investInfo.amount) * 100,
    });
  }, [investInfo.amount]);

  const [componentProps, setProps] = useState({
    email: "test.billions@gmail.com",
    amount: 0,
    metadata: {
      name: "Benjamin",
      phone: "09123456789",
    },
    publicKey,
    text: `Launch Plan`,
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  });

  const payment = () => {
    setStep(3);
    console.log(investInfo);
    // addInvestment();
  };
  return step === 1 ? (
    <div className="borrow plan">
      <span className="back text-mini" onClick={close}>
        <img src={require("../../../public/assets/go_back.svg")} />
        Go Back
      </span>
      <p className="sub-heading mb-3 mt-3">How much do you want to invest?</p>
      <div className="request active_state">
        <p className="recommended text-small">Investment</p>
        <p className="sub-heading text-center mb-1">
          NGN {InputMoney(investInfo.investment)}
          {investInfo.investment % 1 != 0 ? "" : ".00"}
        </p>
        <p className="text-small text-center">
          What you will receive after 1 year
        </p>
      </div>
      <div className="enter_amount mt-2">
        <p className="sub-heading text-gray">NGN</p>
        <input
          type="text"
          className="sub-heading"
          placeholder="Enter amount"
          name="amount"
          value={investInfo.amount}
          onChange={handleChange}
        />
      </div>
      <p className="text-gray text-small mt-1">Minimun amount NGN 10,000.00</p>
      <div className="enter_amount mt-2">
        <p className="no_border text-center">12 Months - 25% Interest</p>
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => setStep(2)}
        disabled={Number(parseMoney(investInfo.amount)) < 10000}
      >
        Next
      </button>
    </div>
  ) : step === 2 ? (
    <div className="borrow plan">
      {/* <span className="back text-mini" onClick={close}>
        <img src={require("../../../public/assets/go_back.svg")} />
        Go Back
      </span> */}
      <p className="sub-heading mb-3">Review your investment plan</p>
      <div className="request active_state">
        <p className="recommended text-small">Investment</p>
        <p className="sub-heading text-center mb-1 ">
          NGN {InputMoney(investInfo.investment)}
          {investInfo.investment % 1 != 0 ? "" : ".00"}
        </p>
        <p className="text-small text-center">
          What you will receive after 1 year
        </p>
      </div>
      <div className="review mt-3 text-gray">
        <p className="mb-1 text-mini">
          Interest Rate <b>{investInfo.rate}%</b>
        </p>
        <p className="mb-1 text-mini">
          Investment Plan <b>{investInfo.plan}</b>
        </p>
        <p className="mb-1 text-mini">
          Starting Amount <b>NGN{investInfo.amount}.00</b>
        </p>
        <p className="mb-1 text-mini">
          Start Date <b>{dateFormat(investInfo.start_date)}</b>
        </p>
        <p className="mb-1 text-mini">
          Maturity Date <b>{dateFormat(investInfo.maturity_date)}</b>
        </p>
      </div>
      <div onClick={() => setStep(3)}>
        <PaystackButton
          className="btn btn-primary"
          {...componentProps}
          onSuccess={addInvestment}
        />
      </div>
      <button className="btn btn-outline mt-1" onClick={close}>
        Start Over
      </button>
    </div>
  ) : (
    <div className="borrow plan">
      <p className="sub-heading mb-3">Paystack Payment API</p>

      {sent ? (
        <Modal close={close}>
          <div className="pop-message">
            <img
              src={require("../../../public/assets/happy_face.svg")}
              height={90}
              width={90}
            />
            <p className="sub-heading mt-2">Success</p>
            <p className="text-gray mt-1">
              Your application was successful! You will be notified soon.
            </p>
            <button className="btn btn-primary mt-2" onClick={close}>
              Back to Home
            </button>
          </div>
        </Modal>
      ) : (
        <Modal close={() => setStep(2)}>
          <Payment action={addInvestment} />
        </Modal>
      )}
    </div>
  );
};

export default FixedPlan;
