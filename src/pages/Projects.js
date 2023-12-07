import React, { useState } from 'react';
import "./Projects.css";
import TopNav from "../navigation/TopNav";

function Projects() {
 // Replace this with the actual number of cards
 const numberOfCards = 6; // For example, if you have 3 cards

 const initialCardStates = Array.from({ length: numberOfCards }, () => '');

 const [cardStates, setCardStates] = useState(initialCardStates);

 const handleSwitch = (className, index) => {
   const newCardStates = [...cardStates];

   switch (className) {
     case "yellow":
       newCardStates[index] = 'minimized';
       break;
     case "green":
       newCardStates[index] = '';
       break;
     case "red":
       newCardStates[index] = 'none';
       break;
     default:
       // Handle default case
   }

   setCardStates(newCardStates);
  };

  return (

    <div className='project__container'>
    <h1>Projects</h1>

      <div className="cards__container">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <div key={index} className={`project_card ${cardStates[index]}`}>
          <div className="tools">
            <div className="circle" onClick={() => handleSwitch('red', index)}>
              <span className="red project--box"></span>
            </div>
            <div className="circle" onClick={() => handleSwitch('yellow', index)}>
              <span className="yellow project--box"></span>
            </div>
            <div className="circle" onClick={() => handleSwitch('green', index)}>
              <span className="green project--box"></span>
            </div>
          </div>
          <div className="card__content">
            {/* Your card content goes here */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;
