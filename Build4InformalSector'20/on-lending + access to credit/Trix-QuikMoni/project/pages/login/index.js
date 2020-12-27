import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Link from "next/link";
import firebase from "../../services/firebase";
import { formatNumber } from "../../services/userService";
import store from "../../store/store";
import { useProxy } from "valtio";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const snapshot = useProxy(store);
  const [userInfo, setInfo] = useState({
    phone: snapshot.phone,
    password: "",
  });
  const [showPass, setShowPass] = useState(snapshot.showPass);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      if (value.length <= 11) {
        setInfo({
          ...userInfo,
          [name]: value,
        });
      }
    } else {
      setInfo({
        ...userInfo,
        [name]: value,
      });
    }
  };

  const handleLogin = () => {
    store.loading = true;
    const appVerifier = window.appVerifier;
    const phoneNumber = formatNumber(userInfo.phone);
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        console.log("Success");
        store.showPass = true;
        store.phone = userInfo.phone;
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // router.push("/login");
        store.loading = false;
      })
      .catch(function (error) {
        console.log("Error:" + error.code);
        store.loading = false;
      });
    //jdhfdf
    // store.loading = true;
    // const appVerifier = window.appVerifier;
    // const phoneNumber = formatNumber(userInfo.phone);
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(phoneNumber, appVerifier)
    //   .then(function (confirmationResult) {
    //     console.log("Success");
    //     setShowPass(true);
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     window.confirmationResult = confirmationResult;
    //     store.loading = false;
    //   })
    //   .catch(function (error) {
    //     console.log("Error:" + error.code);
    //     store.loading = false;
    //   });
  };

  const verifyNumber = () => {
    store.loading = true;
    const verificationId = userInfo.password.toString();
    window.confirmationResult
      .confirm(verificationId)
      .then(function (result) {
        // User signed in successfully.
        console.log("successfully signed in", result.user);
        var user = result.user;

        // user.getIdToken().then((idToken) => {
        //   console.log(idToken);
        // });
        router.push("/dashboard");
        store.loading = false;
      })
      .catch(function (error) {
        // User couldn't sign in (bad verification code?)
        console.error("Error while checking the verification code", error);
        window.alert(
          "Error while checking the verification code:\n\n" +
            error.code +
            "\n\n" +
            error.message
        );
        store.loading = false;
      });
  };
  useEffect(() => {
    window.appVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        store.user = user;
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <Layout>
      <div className="register">
        <div id="recaptcha-container"></div>
        <div className="reg-form">
          <h1 className="heading">Log in to continue</h1>
          <p className="mt-1 text-gray">Log in with your phone number</p>
          <div className="phone-input">
            <p>+234</p>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {snapshot.showPass && (
            <div className="phone-password">
              <input
                type="number"
                placeholder="Enter OTP"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className={userInfo.password != "" ? "pass-size" : null}
              />
            </div>
          )}

          <div>
            {snapshot.showPass ? (
              <button
                id="sign-in-btn"
                className="btn btn-primary"
                onClick={verifyNumber}
                disabled={userInfo.phone === "" || userInfo.password === ""}
              >
                Sign in
              </button>
            ) : (
              <button
                id="sign-in-btn"
                className="btn btn-primary"
                onClick={handleLogin}
                disabled={userInfo.phone === ""}
              >
                Verify Number
              </button>
            )}
          </div>
          <p className="text-mini switch">
            Don’t have an account?{" "}
            <Link href="/register">
              <a>Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
