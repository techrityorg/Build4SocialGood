import React, { useState, useEffect } from "react";
import Setup from "../setup/setup";
import store from "../../../store/store";
import { useProxy } from "valtio";
import Process from "./process";
import Modal from "../../modal/modal";
import Link from "next/link";
import Payment from "../borrow/payment";
import { InputMoney, parseMoney } from "../../formats/money";
import firebase from "../../../services/firebase";

const Borrow = () => {
  const snapshot = useProxy(store);
  const [payment, setPayment] = useState(false);
  const [show, setShow] = useState({
    process: false,
    message: false,
  });

  const closeMessage = () => {
    setShow({
      ...show,
      message: false,
    });
  };
  const handleApply = () => {
    if (!snapshot.userInfo.bvn) {
      setShow({
        ...show,
        message: true,
      });
    } else {
      setShow({
        ...show,
        process: true,
      });
    }
  };

  const payLoan = () => {
    store.loading = true;
    firebase
      .database()
      .ref("userinfo/" + snapshot.user.uid)
      .set({
        ...snapshot.userInfo,
        amountborrowed: 0,
        tenure: 0,
        rate: 0,
        payment_due: 0,
      })
      .then(() => {
        setPayment(!Payment);
        store.loading = false;
      });
  };

  const closeApply = () => {
    setShow({
      ...show,
      process: !show.process,
    });
  };

  useEffect(() => {
    console.log("info", store.userInfo);
  }, []);
  return (
    <div className="container">
      <div className="borrow">
        <div
          className="amount mb-3"
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <div>
            <p className="text-gray mb-1 mt-1">Amount borrowed</p>
            <h5 className="sub-heading mb-1">
              NGN {InputMoney(snapshot.userInfo?.amountborrowed)}.00
            </h5>
          </div>
          {snapshot.userInfo?.amountborrowed != 0 && (
            <div>
              <p className="text-gray mb-1 mt-1">Payment Due</p>
              <h5 className="sub-heading mb-1">
                NGN {InputMoney(snapshot.userInfo?.payment_due)}.00
              </h5>
            </div>
          )}
        </div>
        <div className="request">
          <h5 className="heading mb-2">Request a business loan</h5>
          <p className="text-gray">
            Request a loan and get your money in your account within seconds.
          </p>
          <div className="btn-holder-2">
            <button
              className="btn btn-primary"
              disabled={snapshot.userInfo?.payment_due !== 0}
              onClick={handleApply}
            >
              Request Loan
            </button>
            <button
              className="btn btn-outline"
              disabled={snapshot.userInfo?.amountborrowed === 0}
              onClick={() => setPayment(!payment)}
            >
              Repay Loan
            </button>
          </div>
        </div>
        {show.process && <Process close={closeApply} />}
        {show.message && (
          <Modal close={closeMessage}>
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
        {payment && (
          <Modal close={() => setPayment(!Payment)}>
            <Payment action={payLoan} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Borrow;
