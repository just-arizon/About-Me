import React, { useState } from 'react';
import "./Projects.css";
import TopNav from "../navigation/TopNav";
import productImage1 from '../images/product10.png'; 
import productImage2 from '../images/product9.png'; 

function Projects() {
 const numberOfCards = 2;

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
     image: productImage1,
     title: 'Project 1',
     description: 'Description for Project 1 is a project filled with so much inspirations.',
     stacksUsed: 'React, Node.js, MongoDB',
   },
   {
     image: productImage2,
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
           </div>
         </div>
       ))}
     </div>
 </div>
 );
}

export default Projects;
