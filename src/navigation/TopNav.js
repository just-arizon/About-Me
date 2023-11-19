import React from 'react';
import "./TopNav.css";
import { Icon } from '@iconify/react';
import myLogo from '../images/Group 4.svg';

function TopNavbar() {
  return (
    <div className='topnav'>
      <div className='logo third-step'>
        <img src={myLogo} alt='logo'/>
      </div>
      <div className='topnav__buttons'>
         <ul className='topnav__wrapper  fourth-step'>
           <li className='topnav__item'>
            <a href='https://github.com/just-arizon' className='nav-icon'>
            <Icon icon="line-md:github-loop" />
            </a>
            </li>
           <li className='topnav__item'>
            <a href='https://www.linkedin.com/in/arinze-calistus/' className='nav-icon'>
           <Icon icon="line-md:linkedin" />
            </a>
            </li>
           <li className='topnav__item'>
            <a href='https://twitter.com/just_Arizon' className='nav-icon'>
           <Icon icon="line-md:twitter" />
            </a>
            </li>
         </ul>
      </div>
      <div className='hamburger fifth-step'>
        <Icon icon="solar:hamburger-menu-broken" className='hamburger__icon'/>
      </div>
    </div>
  );
}

export default TopNavbar;
