import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Avatar from "../../assets/Lender/avatar.png";
import SideNav from "../components/SideNav";
import Overview from "./Overview";
import LendingMarket from "./LendingMarket";
import Investments from "./Investments";
import Settings from "./Settings";
import ViewCampaign from "./ViewCampaign";
import PaymentPage from "./PaymentPage";

import "./Dashboard.css";

function Dashboard() {
  const { url } = useRouteMatch();
  return (
    <div id="dashboard">
      <div className="dashboard-container d-flex">
        <SideNav avatar={Avatar} name="Umar Farouq" />
        <div className="col-sm-10 main-content px-0 w-full">
          <Switch>
            <Route path={`${url}/overview`} component={Overview} />
            <Route
              path={`${url}/lending-market`}
              component={LendingMarket}
              exact
            />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/view-campaign/:id`} component={ViewCampaign} />
            <Route path={`${url}/paymentpage/:id`} component={PaymentPage} />
            <Route path={`${url}/investments`} component={Investments} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
