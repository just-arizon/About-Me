import React from 'react';
import "./Homepage.css";
import TopNav from './navigation/TopNav';
import BottomNav from './navigation/BottomNav';

function Homepage() {
  return (
    <div className='homepage'>
       <TopNav />
       <BottomNav />
    </div>
  );
}

export default Homepage;
