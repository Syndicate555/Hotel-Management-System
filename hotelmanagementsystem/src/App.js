import './App.css';
import React, { Fragment, useEffect, useState } from "react";
import { useHistory, Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import EmployeeLookup from "./components/EmployeeLookup"
import RoomSearch from "./components/RoomSearch"
function App() {


  return (
    <div>
      <Router>
        <Switch>

          <Route path="/customer-search" >
            <RoomSearch />
          </Route>
          <Route path="/employee-lookup">
            <EmployeeLookup />

          </Route>
          <Route path="/confirm-customer">

          </Route>
          <Route path="/customer-registration">

          </Route>
          <Route path="/customer-payment">

          </Route>
          <Route path="/">
            <Home />

          </Route>
        </Switch>

      </Router>

    </div>


  );
}

export default App;
