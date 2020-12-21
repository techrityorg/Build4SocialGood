import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import Overview from "./Overview";
import LendingMarket from "./LendingMarket";
import Footer from "../components/Footer";

import "./Dashboard.css";

const Dashboard = () => {
  const { url } = useRouteMatch();
  return (
    <div className="vh-100">
      <Navbar />

      <Switch>
        <Route path={`${url}/overview`} component={Overview} exact />
        <Route path={`${url}/lending-market`} component={LendingMarket} exact />
        {/* <Route path={`${url}/patients/:id`} component={PatientProfile} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;
