import React from "react";
import "./Dashboard.css";
import { Icon } from '@iconify/react';
import svgDoodle from '../images/svg-doodle.svg';
function dashboard() {
  return (
    <div className="dashboard__component">
                <div class="svg__doodle"><img src={svgDoodle} alt='logo'/></div>
      <div className="dash__timeline">
        <div className="dash__profile--img">
        {/* <div className="svg">
            <img src={svgDoodle} alt='logo'/>
            </div> */}
          <div class="image__circle">
            <img src="" />
            </div>
            <div className="svg">
  
            </div>
        </div>
        <div className="dash__profile">
          <div className="dash__profile--text">
            <p><span>Hello</span>, I’m Arinze 
            <br/>
 A Front-End Developer with the following stacks
</p>
<div className="stacks">
  <span className="iconify toolkits">
  <Icon icon="material-symbols:javascript-rounded" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="ion:logo-sass" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="tabler:brand-bootstrap" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="cib:react" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="ic:outline-css" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="ph:file-html-fill" />
  </span>
  {/* <span className="iconify toolkits">
  <Icon icon="cib:react" />
  </span> */}
</div>
          </div>
        </div>
      </div>
      <div class="svg__doodle--2"><img src={svgDoodle} alt='logo'/></div>
    </div>
  );
}

export default dashboard;
