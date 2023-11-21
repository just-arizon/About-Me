import React from 'react';
import "./Homepage.css";
import TopNav from './navigation/TopNav';

import BottomNav from './navigation/BottomNav';
import Dashboard from './timeline/Dashboard';
import Scroller from './timeline/Swiper';
function Homepage() {
  return (
    <div className='homepage'>
       <TopNav />
       <Dashboard />
       <Scroller />
       <BottomNav />
    </div>
  );
}

export default Homepage;
