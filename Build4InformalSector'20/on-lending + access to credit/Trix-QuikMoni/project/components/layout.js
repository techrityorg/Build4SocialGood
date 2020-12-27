import Raact, { useEffect, useState } from "react";
import Nav from "./header/nav";
import Head from "next/head";
import store from "../store/store";
import { useProxy } from "valtio";
import Spinner from "./loader/spinner";

const Layout = ({ children }) => {
  const snapshot = useProxy(store);

  return (
    <div className="layout">
      <Head>
        <title>QuikMoni</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Nav />
      <div>
        {children}
        <p
          className="text-gray"
          style={{ position: "absolute", bottom: "20px", right: "20px" }}
        ></p>
      </div>

      {snapshot.loading && <Spinner />}
    </div>
  );
};

export default Layout;
