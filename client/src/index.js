import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import MealPlanProvider from './utils/MealPlanContext';
import UserProvider from './utils/UserContext';

ReactDOM.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="foodroid.us.auth0.com"
    clientId="ZZ6ysWCwjVXx8I4t21BTzgdV9mUp6Ug0"
    redirectUri={`${window.location.origin}/planner`}
    audience="https://foodroid.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <MealPlanProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MealPlanProvider>
  </Auth0Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
