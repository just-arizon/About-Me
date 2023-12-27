import React, {useState} from 'react';
import "./BottomNav.css";
import { Icon } from '@iconify/react';
import myLogo from '../images/Group 4.svg';
import { useTour } from '@reactour/tour';
import { NavLink } from 'react-router-dom';
import 'animate.css';

function BottomNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bottomnav'>

    
       <div className={`bottomNav__container ${isMenuOpen ? 'open' : ''}`}>
       <div className="container">
         <NavLink to="/">
           <div className='logo third-step'>
            <img src={myLogo} alt='logo'/>
                 </div>
          </NavLink>
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

       <div className=" submenu">
      <ul className='submenu__content animate__bounceInLeft'>
             <li className='submenu__item'>
             <NavLink to="/projects">Projects</NavLink>
              </li>
             <li className='submenu__item'>
             <NavLink to="/about">About</NavLink>
              </li>
             <li className='submenu__item'>
             <NavLink to="/experience">Experience</NavLink>
              </li>
             <li className='submenu__item'>
             <NavLink to="/resume">Resume</NavLink>
              </li>
             <li className='submenu__item'>
             <NavLink to="/contact">Contact</NavLink>
              </li>
           </ul>
      </div>

      
       </div>



    
    </div>
  );
}

export default BottomNav;