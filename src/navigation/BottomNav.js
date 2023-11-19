import React from 'react';
import "./BottomNav.css";
import { Icon } from '@iconify/react';
import myLogo from '../images/Group 4.svg';
import { useTour } from '@reactour/tour'
function BottomNav() {
  return (
    <div className='bottomnav'>
       <div className='logo'>
        <img src={myLogo} alt='logo'/>
      </div>
      <div className='bottomnav__buttons'>
         <ul className='bottomnav__wrapper'>
           <li className='bottomnav__item'>
            <a href='https://github.com/just-arizon' className='nav-icon'>
            <Icon icon="line-md:github-loop" />
            </a>
            </li>
           <li className='bottomnav__item'>
            <a href='https://www.linkedin.com/in/arinze-calistus/' className='nav-icon'>
           <Icon icon="line-md:linkedin" />
            </a>
            </li>
           <li className='bottomnav__item'>
            <a href='https://twitter.com/just_Arizon' className='nav-icon'>
           <Icon icon="line-md:twitter" />
            </a>
            </li>
         </ul>
      </div>
      <div className='hamburger second-step'>
        <Icon icon="solar:hamburger-menu-broken" className='hamburger__icon'/>
      </div>
    </div>
  );
}

export default BottomNav;

