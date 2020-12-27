import React, { useEffect, useState } from "react";
import firebase from "../../services/firebase";
import { useRouter } from "next/router";
import store from "../../store/store";
import logo from "../../public/assets/logo@2x.png";
import burgerIcon from "../../public/assets/menu_icon.svg";
import Modal from "../../components/modal/modal";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const signOut = () => {
    store.loading = true;
    firebase.auth().signOut();
    console.log("signed out");

    store.loading = false;
    router.push("/login");
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLogin(true);
      }
      setShowNav(true);
    });
  }, []);
  return showNav ? (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
          <img src={logo} />
        </div>
      </Link>
      <div className="burger-icon" onClick={() => setMenu(!menu)}>
        <span>
          <img src={burgerIcon} />
        </span>
      </div>
      {menu && (
        <Modal close={() => setMenu(!menu)}>
          {login ? (
            <div className="pop-menu">
              <div>
                <Link href="/dashboard">
                  <a className="sub-heading">Home</a>
                </Link>
              </div>
              <div>
                <Link href="/account">
                  <a className="sub-heading">Update Account</a>
                </Link>
              </div>
              <div>
                <Link href="/faqs">
                  <a className="sub-heading">FAQs</a>
                </Link>
              </div>
              <button className="btn btn-outline" onClick={signOut}>
                Logout
              </button>
            </div>
          ) : (
            <div className="pop-menu">
              <div>
                <Link href="/">
                  <a className="sub-heading">Home</a>
                </Link>
              </div>
              <div>
                <Link href="/faqs">
                  <a className="sub-heading">FAQs</a>
                </Link>
              </div>
              <Link href="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
            </div>
          )}
        </Modal>
      )}
    </nav>
  ) : null;
};

export default Nav;
