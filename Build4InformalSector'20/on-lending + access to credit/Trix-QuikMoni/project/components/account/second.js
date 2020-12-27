import React from "react";
import banks from "../../banks.json";
import store from "../../store/store";
import firebase from "../../services/firebase";
import { useProxy } from "valtio";

const Second = ({ accountInfo, setStep, setAccountInfo }) => {
  const snapshot = useProxy(store);
  const handleChange = (event) => {
    const { value, name } = event.target;

    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };

  const saveInfo = () => {
    store.loading = true;
    firebase
      .database()
      .ref("userinfo/" + snapshot.user.uid)
      .set(snapshot.accountInfo)
      .then(() => {
        store.loading = false;
        setStep(3);
      });
  };
  return (
    <div className="form-col mt-2">
      <div className="form-group mb-2">
        <label className="text-mini">Bank Name</label>
        <select
          className="form-input mt-1"
          value={accountInfo.bank_name}
          name="bank_name"
          onChange={handleChange}
        >
          <option value="">Select Bank</option>
          {banks.map((bank) => (
            <option key={bank.code} value={bank.name}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <label className="text-mini">Account Number</label>
        <input
          type="number"
          className="form-input mt-1"
          placeholder="Enter your bank account no."
          name="bank_account_number"
          value={accountInfo.bank_account_number}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-2">
        <label className="text-mini">Next of Kin Full Name</label>
        <input
          type="text"
          className="form-input mt-1"
          placeholder="Enter your next of kin full name"
          name="nok_name"
          value={accountInfo.nok_name}
          onChange={handleChange}
        />
      </div>

      <label className="text-mini">Next of Kin Phone Number</label>
      <div className="phone-input input">
        <p>+234</p>
        <input
          type="number"
          placeholder="Enter phone number"
          name="nok_phone"
          value={accountInfo.nok_phone}
          onChange={handleChange}
        />
      </div>

      <div className="btn-holder-2 mt-3">
        <button
          className="btn btn-outline"
          style={{ width: "120px" }}
          onClick={() => setStep(1)}
        >
          Prev
        </button>
        <button
          className="btn btn-primary"
          style={{ width: "120px" }}
          onClick={saveInfo}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Second;
