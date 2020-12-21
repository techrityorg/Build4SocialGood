import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import IotCenter from "./components/iotcenter/IotCenter";
import LendingPage from "./components/lending/Lending";
import LendeeDashboard from "./lendee/screens/Dashboard";
import LenderDashboard from "./lender/screens/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/>
      <Route path="/" exact strict component={Home}/>
      <Route path="/iot-center" exact strict component={IotCenter}/>
      <Route path="/lending-page" exact strict component={LendingPage} /> */}
        <Route path="/lendee" component={LendeeDashboard} />
        <Route path="/lender" component={LenderDashboard} />
      </Router>
    </div>
  );
}

export default App;
