import React from 'react';
import "./Homepage.css";
import TopNav from './navigation/TopNav';
import BottomNav from './navigation/BottomNav';
import Dashboard from './timeline/Dashboard';


function Homepage() {
  return (
    <div className='homepage'>
       <TopNav />
       <Dashboard />
       {/* <Slider /> */}
       <BottomNav />
    </div>
  );
}

export default Homepage;
