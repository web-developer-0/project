import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./home";
import Login from "./login/login";
import SignUp from "./login/signUp";
import About from "./Components/about";
import Contact from "./Components/contact";
import BuyerProfile from "./buyer/profile";

/*
import CreateGigs from "./Components/seller/createGig";
import Profile from "./Components/seller/profile";*/


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/buyer_profile" element={<BuyerProfile/>} />
 
      </Routes>
    </Router>
  );
}

export default App;
