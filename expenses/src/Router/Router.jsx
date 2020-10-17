import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashBoard from "../Components/DashBoard";
import Navbar from "../Components/Navbar";
import Support from "../Components/Support";
import Ledger from "../Components/Ledger";
import Account from "../Components/Account";
export default function Router() {
  return (
    <>
      {/* <Navbar /> */}

      <Route path="/" exact render={(props) => <Login {...props} />} />
      <Route path="/Register" exact render={() => <Register />} />
      <Route path="/NavBar" render={() => <Navbar />} />
      <Route path="/NavBar/Dashboard" exact render={() => <DashBoard />} />
      <Route path="/NavBar/ledger" exact render={() => <Ledger />} />
      <Route path="/NavBar/Support" exact render={() => <Support />} />
      <Route path="/NavBar/Account" exact render={() => <Account />} />
    </>
  );
}
