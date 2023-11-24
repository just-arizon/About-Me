import React, {useState} from 'react';
import "./BottomNav.css";
import { Icon } from '@iconify/react';
import myLogo from '../images/Group 4.svg';
import { useTour } from '@reactour/tour'
function BottomNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bottomnav'>

     <div className={`submenu ${isMenuOpen ? 'open' : ''}`}>
      <ul className='submenu__content'>
             <li className='submenu__item'>
              <a href='https://github.com/just-arizon' className='submenu__links'>
              Project
              </a>
              </li>
             <li className='submenu__item'>
              <a href='https://www.linkedin.com/in/arinze-calistus/' className='submenu__links'>
             About
              </a>
              </li>
             <li className='submenu__item'>
              <a href='https://twitter.com/just_Arizon' className='submenu__links'>
             Experience
              </a>
              </li>
             <li className='submenu__item'>
              <a href='https://twitter.com/just_Arizon' className='submenu__links'>
             Certificate
              </a>
              </li>
             <li className='submenu__item'>
              <a href='https://twitter.com/just_Arizon' className='submenu__links'>
             Resume
              </a>
              </li>
           </ul>
      </div>
    
       <div class="bottomNav__container">
         <div className='logo third-step'>
          <img src={myLogo} alt='logo'/>
               </div>
               <div className='bottomnav__buttons'>
           <ul className='bottomnav__wrapper fourth-step'>
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
               <div className='hamburger fifth-step'>
          <Icon icon="solar:hamburger-menu-broken" className={`hamburger__icon ${isMenuOpen ? '' : ''}`} onClick={toggleMenu}/>
               </div>
       </div>
    </div>
  );
}

export default BottomNav;

