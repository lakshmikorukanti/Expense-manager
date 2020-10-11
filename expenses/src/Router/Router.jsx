import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DashBoard from "../Components/DashBoard";
import Navbar from "../Components/Navbar"
export default function Router() {
  return (
    <>
    {/* <Navbar /> */}
  
      <Route path="/" exact render={(props) => <Login  {...props} />} />
      <Route path="/Register" exact render={() => <Register />} />
      <Route path="/NavBar" render={() => <Navbar />} />
      <Route path="/NavBar/DashBoard" exact render={() => <DashBoard />} />
    
     
    </>
  );
}