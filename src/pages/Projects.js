import React, { useState } from 'react';
import "./Projects.css";
import TopNav from "../navigation/TopNav";

function Projects() {
 const numberOfCards = 2;

 const initialCardStates = Array.from({ length: numberOfCards }, () => ({
   content: {
     image: '',
     title: '',
     description: '',
     stacksUsed: '',
   },
   state: '',
 }));

 const [cardStates, setCardStates] = useState(initialCardStates);

 const cardContent = [
   {
     image: 'path/to/image1.jpg',
     title: 'Project 1',
     description: 'Description for Project 1.',
     stacksUsed: 'React, Node.js, MongoDB',
   },
   {
     image: 'path/to/image1.jpg',
     title: 'Project 2',
     description: 'Description for Project 2.',
     stacksUsed: 'React, Node.js, MongoDB',
   },
   // Add content for other cards...
 ];

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
             <img src={cardContent[index].image} alt='Project' />
             <h2>{cardContent[index].title}</h2>
             <p>{cardContent[index].description}</p>
             <p>Stacks Used: {cardContent[index].stacksUsed}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
}

export default Projects;
