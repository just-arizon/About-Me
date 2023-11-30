import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TourProvider } from '@reactour/tour'
const root = ReactDOM.createRoot(document.getElementById('root'))
const steps = [
  {
    selector: '.first-step',
    content: "This is my profile, you'll get to know me more in the about section.",
  },
  {
    selector: '.second-step',
    content: "This is just the preview of the best projects I've done so far",
  },
  {
    selector: '.third-step',
    content: "Get back to the homepage at any point through this logo",
  },
  {
    selector: '.fourth-step',
    content: "My Socials",
  },
  {
    selector: '.fifth-step',
    content: "You can navigation through the different section through the menu",
  },
  // ...
];
root.render(
  <TourProvider steps={steps}>
  <App />
</TourProvider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
