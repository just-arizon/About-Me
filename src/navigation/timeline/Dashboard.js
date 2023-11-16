import React from "react";
import "./Dashboard.css";
import { Icon } from '@iconify/react';
function dashboard() {
  return (
    <div className="dashboard__component">
      <div className="dash__timeline">
        <div className="dash__profile--img">
          <div class="image__circle">
            <img src="" />
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
  {/* <span className="iconify toolkits">
  <Icon icon="cib:react" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="cib:react" />
  </span>
  <span className="iconify toolkits">
  <Icon icon="cib:react" />
  </span> */}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
