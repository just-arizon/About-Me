import React from "react";
import "./Homepage.css";
import TopNav from "./navigation/TopNav";
import BottomNav from "./navigation/BottomNav";
import Dashboard from "./timeline/Dashboard";
import Swiper from "./timeline/Swiper";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function Homepage() {
  return (
      <div className="homepage">
        <TopNav />   
            <Dashboard />
            <Swiper />
        <BottomNav />
      </div>
  );
}

export default Homepage;
