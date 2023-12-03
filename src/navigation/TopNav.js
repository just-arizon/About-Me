import React, {useState} from 'react';
import "./TopNav.css";
// import "./BottomNav.css";
import { Icon } from '@iconify/react';
import myLogo from '../images/Group 4.svg';
import { NavLink } from 'react-router-dom';


function TopNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <div className='topnav'>
       <div className="main__menu">
         <NavLink to="/">
           <div className='logo third-step'>
            <img src={myLogo} alt='logo'/>
                 </div>
          </NavLink>
               <div className='topnav__buttons'>
           <ul className='topnav__wrapper'>
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
          <Icon icon="solar:hamburger-menu-broken" className={`hamburger__icon ${isMenuOpen ? '' : ''}`} onClick={toggleMenu}/>
               </div>
       </div>

     
       <div className={`top__submenu ${isMenuOpen ? 'open' : ''}`}>
      <ul className='top__submenu__content animate__bounceInLeft'>
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
    
  );
}

export default TopNavbar;
