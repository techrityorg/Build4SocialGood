import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./shared/home/Home";

import Error404 from "./shared/error404/Error404";

import LenderDashboard from "./lender/screens/Dashboard";
import LendeeDashboard from "./lendee/screens/Dashboard";

import UserLogin from "./shared/userlogin/Login";
import UserRegister from "./shared/userRegister/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/login" component={UserLogin} />

        <Route path="/lender" component={LenderDashboard} />
        <Route path="/lendee" component={LendeeDashboard} />

        {/* Private Route available to only authenticated User */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/new-resume" component={New_resume} />
        <PrivateRoute path="/template-a" component={TemplateA} /> */}

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
