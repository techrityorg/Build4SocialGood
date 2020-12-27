import firebase from "../services/firebase";
import store from "../store/store";

export const formatNumber = (number) => {
  let phone;
  if (number[0] === "0") {
    phone = number.slice(1);
  } else {
    phone = number;
  }
  return `+234${phone}`;
};

export const getInfo = (user) => {
  let data = {};
  firebase
    .database()
    .ref("userinfo")
    .child(user.uid)
    .on("value", (snapshot) => {
      data = snapshot.val();
      store.userInfo = data;
      store.accountInfo = data;
      // updateStarCount(postElement, data);
    });
  return data;
};

export const publicKey = "pk_test_12e978826733907ac74f8a409a5c504b24e7586d";
