import React from 'react';
import "./Homepage.css";
import TopNav from './navigation/TopNav';
import BottomNav from './navigation/BottomNav';
import Dashboard from './Dashboard';

function Homepage() {
  return (
    <div className='homepage'>
       <TopNav />
       <Dashboard />
       <BottomNav />
    </div>
  );
}

export default Homepage;
