import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashBoard from "../Components/DashBoard"
export default function Router() {
  return (
    <>
      <Route path="/" exact render={(props) => <Login {...props} />} />
      <Route path="/Register" exact render={() => <Register />} />
      <Route path="/DashBoard" render={() => <DashBoard />} />
     
    </>
  );
}