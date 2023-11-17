import React from "react";
import "./Dashboard.css";
import "./Scroller.css";
import "./Scroller";
import { Icon } from '@iconify/react';
import svgDoodle from '../images/svg-doodle.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function dashboard() {
  return (
    <div className="dashboard__component">
                <div class="svg__doodle"><img src={svgDoodle} alt='logo' data-aos="flip-right"/></div>
      <div className="dash__timeline">
        <div className="dash__profile--img">
        {/* <div className="svg">
            <img src={svgDoodle} alt='logo'/>
            </div> */}
          <div class="image__circle" data-aos="flip-right">
            <img src="" />
            </div>
            <div className="svg">
  
            </div>
        </div>
        <div className="dash__profile"data-aos="fade-up"
     data-aos-duration="2000">
          <div className="dash__profile--text">
            <p><span>Hello</span>, I’m Arinze 
            <br/>
 A Front-End Developer with the following stacks
</p>
<div className="scroller">
  <ul class="tag-list scrooler__inner">
    <li className="iconify toolkits">
    <Icon icon="material-symbols:javascript-rounded" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ion:logo-sass" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="tabler:brand-bootstrap" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="cib:react" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ic:outline-css" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ph:file-html-fill" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="cib:react" />
    </li>
  </ul>
</div>
          </div>
        </div>
      </div>
      <div class="svg__doodle--2 ">
        <img src={svgDoodle} alt='logo' data-aos="flip-left"/ >

        </div>
    </div>
  );
}

export default dashboard;
