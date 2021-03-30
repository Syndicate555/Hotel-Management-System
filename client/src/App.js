import './App.css';
import React, { Fragment, useEffect, useState } from "react";
import { useHistory, Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import EmployeeLookup from "./components/EmployeeLookup"
import RoomSearch from "./components/RoomSearch"
import ConfirmCustomer from './components/ConfirmCustomer'
import CustomerPayment from './components/CustomerPayment'
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
            <ConfirmCustomer />

          </Route>
          <Route path="/customer-registration">

          </Route>
          <Route path="/customer-payment">
            <CustomerPayment />

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