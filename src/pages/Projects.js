import React, { useState } from 'react';
import "./Projects.css";
import TopNav from "../navigation/TopNav";


import projectImage1 from '../images/IMG_20231228_225134_122.jpg'; 
import projectImage2 from '../images/IMG_20231228_222158_309.jpg'; 


function Projects() {
 const numberOfCards = 6;

 const initialCardStates = Array.from({ length: numberOfCards }, () => ({
   content: {
     image: '',
     title: '',
     description: '',
     stacksUsed: '',
   },
   state: 'minimized',
 }));

 const [cardStates, setCardStates] = useState(initialCardStates);

 const cardContent = [
   {
     image: projectImage1,
     title: 'Palmpay Clone',
     description: 'Description for Project 1 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   {
     image: projectImage2,
     title: 'Dynamic Menu',
     description: 'Description for Project 2 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   {
     image: projectImage1,
     title: 'Project 2',
     description: 'Description for Project 2 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   {
     image: projectImage1,
     title: 'Project 2',
     description: 'Description for Project 2 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   {
     image: projectImage2,
     title: 'Project 2',
     description: 'Description for Project 2 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   {
     image: projectImage1,
     title: 'Project 2',
     description: 'Description for Project 2 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
     
   },
   // Add content for other cards...
 ];

 const handleSwitch = (className, index) => {
  
   const newCardStates = [...cardStates];

   switch (className) {
    case "yellow":
      newCardStates[index].state = 'minimized';
      break;
    case "green":
      newCardStates[index].state = '';
      break;
    case "red":
      newCardStates[index].state = 'none';
      break;
    default:
  }
  
   
   setCardStates(newCardStates);
 };

 return (
   <div className='project__container'>
     <h1>Projects</h1>

     <div className="cards__container">
       {Array.from({ length: numberOfCards }, (_, index) => (
         <div key={index} className={`project_card ${cardStates[index].state}`}>
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
             <img src={cardContent[index].image} alt='Project' className='card__img'/>
             <h2 className='card__title'>{cardContent[index].title}</h2>
             <p className='card__description'>{cardContent[index].description}</p>
             <p className='card__stacks'>Stacks Used: {cardContent[index].stacksUsed}</p>
             <div className="project__btns">
              <button>Preview</button>
              <button>GitHub</button>
             </div>
           </div>
         </div>
       ))}
     </div>
 </div>
 );
}

export default Projects;
