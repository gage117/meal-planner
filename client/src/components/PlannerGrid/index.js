import { useState, useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import DayCard from '../DayCard';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const reducer = (state, action) => {
  switch(action.type){
    case "add_product":
      return state = [...state, {...action.payload, id: state.length + 1}]

    case "remove_product":
      return state = state.filter( prod => prod.id !== action.payload.id )
      
    default:
      return state
  }
}

export default function PlannerGrid() {

  const [mealPlan, dispatch] = useReducer(reducer, {
    sunday: {
      breakfast: "Fried Eggs",
      lunch: "Tuna Lunch Salad",
      dinner: "Keto Chili",
      snack1: "Beef Jerky",
      snack2: "Raspberries"
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
  })

  // TODO: Take out if unused due to reducer
  const [plannerState, setPlannerState] = useState({
    sunday: {
      breakfast: "Fried Eggs",
      lunch: "Tuna Lunch Salad",
      dinner: "Keto Chili",
      snack1: "Beef Jerky",
      snack2: "Raspberries"
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
      "Fried Eggs",
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
            mealPlan={mealPlan} 
            setPlannerState={setPlannerState}  
            meals={meals}
          />
        </Grid>
      ))}
    </Grid>
  );
}