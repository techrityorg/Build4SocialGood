import React, { useEffect, useState } from "react";
import FixedPlan from "../invest/fixedplan";
import FlexPlan from "../invest/flexplan";
import { InputMoney } from "../../formats/money";
import store from "../../../store/store";
import { snapshot, useProxy } from "valtio";
import Modal from "../../modal/modal";
import Link from "next/link";

const Invest = () => {
  const snapshot = useProxy(store);
  const [view, setView] = useState("total");
  const [plan, setPlan] = useState("");
  const [message, setMessage] = useState(false);

  const checkAccount = () => {
    if (!snapshot.userInfo.bvn) {
      setMessage(true);
    } else {
      setView("invest");
    }
  };

  useEffect(() => {
    console.log(snapshot.userInfo);
  }, []);

  return view !== "total" ? (
    <div className="container">
      {plan === "fixed" ? (
        <FixedPlan close={() => setPlan("")} />
      ) : plan === "flexible" ? (
        <FlexPlan close={() => setPlan("")} />
      ) : (
        <div className="borrow plan">
          <span className="back text-mini" onClick={() => setView("total")}>
            <img src={require("../../../public/assets/go_back.svg")} />
            Go Back
          </span>
          <p className="sub-heading mb-2 mt-3">Choose an investment plan</p>
          <div
            className="request clickable mb-3"
            style={{ padding: "20px" }}
            onClick={() => setPlan("flexible")}
          >
            <p className="mb-1">Flexible Plan</p>
            <p className="text-gray text-mini">
              You can invest NGN10,000 - N300,000
              <br />
              and get 10% interest per 3 months.
            </p>
          </div>
          <div
            className="request clickable"
            style={{ padding: "20px" }}
            onClick={() => setPlan("fixed")}
          >
            <p className="mb-1">Fixed Plan</p>
            <p className="text-gray text-mini">
              You can invest NGN10,000 - N1,000,000
              <br />
              and get 25% interest per year.
            </p>
            <p className="recommended text-mini">Recommended</p>
          </div>

          {/* {plan === "fixed" && <FixedPlan close={() => setPlan("")} />}
        {plan === "flexible" && <FlexPlan close={() => setPlan("")} />} */}
        </div>
      )}
    </div>
  ) : (
    <div className="container">
      <div className="borrow">
        <div className="request mb-2">
          <div>
            <p className="text-gray mb-1 mt-1">Total Invested</p>
            <h5 className="sub-heading mb-1">
              NGN {InputMoney(snapshot.investments?.total)}.00
            </h5>
          </div>
          <div>
            <p className="text-gray mb-1 mt-1">Total Earnings Due</p>
            <h5 className="sub-heading mb-1">
              NGN {InputMoney(snapshot.investments?.earnings)}.00
            </h5>
          </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={checkAccount}>
          Invest Now
        </button>
        {message && (
          <Modal close={() => setMessage(false)}>
            <div className="pop-message">
              <img
                src={require("../../../public/assets/sad_face.svg")}
                height={90}
                width={90}
              />
              <p className="sub-heading mt-2">Update account</p>
              <p className="text-gray mt-1">
                You need update your account information to continue.
              </p>
              <Link href="/account">
                <button className="btn btn-primary mt-2">Update Now</button>
              </Link>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Invest;
