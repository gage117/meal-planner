import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DayCard from '../DayCard';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  const [plannerState, setPlannerState] = useState({
    sunday: {
      breakfast: "Bacon",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    monday: {
      breakfast: "",
      lunch: "Eggs",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    tuesday: {
      breakfast: "",
      lunch: "",
      dinner: "Omelette",
      snack1: "",
      snack2: ""
    },
    wednesday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "Eggs",
      snack2: ""
    },
    thursday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: "Bacon"
    },
    friday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    saturday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    }
  });

  // TODO: Set from database call
  const meals = {
    breakfasts: [
      "Keto Egg Muffins",
      "Fried eggs",
      "Omelette",
      "Fancy Yogurt"
    ],
    lunches: [
      "Tuna Lunch Salad",
      "Keto Lettuce Wraps",
      "Bacon Wrapped Asparagus",
      "Keto Taquitos"
    ],
    dinners: [
      "Keto Chili",
      "Meatball Parm Casserole",
      "Steak",
      "Baked Salmon"
    ],
    snacks: [
      "Beef Jerky",
      "Hard Boiled Eggs",
      "String Cheese",
      "Pickles",
      "Pork Rinds",
      "Pecans",
      "Almonds",
      "Walnuts",
      "Greek Yogurt",
      "Cottage Cheese",
      "Blackberries",
      "Raspberries"
    ]
  };

  return (
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
            plannerState={plannerState} 
            setPlannerState={setPlannerState}  
            meals={meals}
          />
        </Grid>
      ))}
    </Grid>
  );
}