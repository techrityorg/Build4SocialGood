import { proxy } from "valtio";
import firebase from "../services/firebase";

const store = proxy({
  phone: "",
  showPass: false,
  loading: false,
  user: null,
  showLogin: false,
  userInfo: null,
  accountInfo: null,
  investments: {
    total: 0,
    earnings: 0,
  },
});

export default store;
