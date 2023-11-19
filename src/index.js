import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TourProvider } from '@reactour/tour'
const root = ReactDOM.createRoot(document.getElementById('root'))
const steps = [
  {
    selector: '.first-step',
    content: 'This is my profile',
  },
  {
    selector: '.second-step',
    content: 'You can navigate by using this!',
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
reportWebVitals();
