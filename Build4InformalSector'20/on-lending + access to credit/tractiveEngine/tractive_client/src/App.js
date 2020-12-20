import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import IotCenter from "./components/iotcenter/IotCenter"
import LendingPage from "./components/lending/Lending"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Route path="/" exact strict component={Home}/>
      <Route path="/iot-center" exact strict component={IotCenter}/>
      <Route path="/lending-page" exact strict component={LendingPage} />
    </Router>
    </div>
  );
}

export default App;
