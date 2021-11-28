import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from 'react';
import {MealPlanContext} from '../utils/MealPlanContext';
import { Button, Grid } from '@mui/material';
import DayCard from '../components/day-card';
import template from '../utils/Foodroid_Template';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  
  const { mealPlan, dispatch } = useContext(MealPlanContext);
  // TODO: Set meals from database call
  const meals = {
    breakfasts: [],
    lunches: [],
    dinners: [],
    snacks: [],
  };
  let i = 0, len = template.length;
  while (i < len) {
    console.log(template[i])
    switch (template[i].mealOfTheDay) {
      case 'Breakfast':
        meals.breakfasts.push(template[i]);
        break;
      case 'Lunch':
        meals.lunches.push(template[i]);
        break;
      case 'Dinner':
        meals.dinners.push(template[i]);
        break;
      case 'Snack':
        meals.snacks.push(template[i]);
        break;
      default:
        break;
    }
    i++;
  }

  const { isAuthenticated } = useAuth0();

  const clearMealPlan = () => {
    dispatch({type: "CLEAR_MEAL_PLAN", payload: {}})
  }
  
  return (
    <>
      <Button variant="contained" color="primary" onClick={clearMealPlan}>Clear Meal Plan</Button>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={4}
      >
        {days.map(day => (
          <Grid item xs={12} lg={3} key={day}>
            <DayCard 
              key={day} 
              day={day} 
              meals={meals}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}