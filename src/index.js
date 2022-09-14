import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/dmsans-regular-webfont.ttf'; 
import './fonts/dmsans-bold-webfont.ttf'; 
import './fonts/dmsans-medium-webfont.ttf'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

