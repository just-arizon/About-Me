import React from 'react';
import "./Projects.css";
import TopNav from "../navigation/TopNav";

function Projects() {
  return (
    <div className="project__container">
        <TopNav />
      <h1>
       Projects
      </h1>

      <div class="card">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
  </div>
  <div class="card__content">
  </div>
</div>
    </div>

    
  );
}

export default Projects;
