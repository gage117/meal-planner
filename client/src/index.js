import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MealPlanProvider from './utils/MealPlanContext';

ReactDOM.render(
  // <React.StrictMode>
  <MealPlanProvider>
    <App />
  </MealPlanProvider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
