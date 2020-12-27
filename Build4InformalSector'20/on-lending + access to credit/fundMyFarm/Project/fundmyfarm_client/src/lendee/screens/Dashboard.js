import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Avatar from "../../assets/Lender/avatar.png";
import SideNav from "../components/SideNav";
import Overview from "./Overview";
import CreateCampaign from "./CreateCampaign";

import "./Dashboard.css";
import Campaign from "./Campaign";

function Dashboard() {
  const { url } = useRouteMatch();
  return (
    <div id="lendee-dashboard">
      <div className="dashboard-container d-flex">
        <SideNav avatar={Avatar} name="Umar Farouq" />
        <div className="col-sm-10 main-content w-100 px-0">
          <Switch>
            <Route path={`${url}/overview`} component={Overview} />
            <Route path={`${url}/new`} component={CreateCampaign} exact />

            <Route path={`${url}/campaign`} component={Campaign} exact />
            {/*  <Route path={`${url}/view-campaign/:id`} component={ViewCampaign} />
            <Route path={`${url}/investments`} component={Investments} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
