import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from "./Components/Register"
import Router from "./Router/Router";
import Login from "./Components/Login"
function App() {
  return (
    <div className="App">

 <Login/>
  <Register/>


  <Router/>

      </div>
  );
}

export default App;
