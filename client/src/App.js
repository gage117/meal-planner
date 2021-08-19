import { useState, useReducer } from 'react';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import MealPlanContext from './utils/MealPlanContext';

const reducer = (state, action) => {
  if(action.type === 'UPDATE_MEAL_PLAN') {
    if (!action.payload.day || !action.payload.whichMeal || !action.payload.mealName) {
      return state;
    }
    // Modify meal in state and then return copy of state
    state[action.payload.day.toLowerCase()][action.payload.whichMeal.toLowerCase()] = action.payload.mealName;
    localStorage.setItem("mealPlan", JSON.stringify(state));
    return state = {
      ...state
    };
  } else if (action.type === 'INITIALIZE_FROM_LOCALSTORAGE') {
    return state = JSON.parse(localStorage.getItem("mealPlan"));
  } else {
    return state;
  }
}

const defaultState = {
  sunday: {
    breakfast: "Fried Eggs",
    lunch: "Tuna Lunch Salad",
    dinner: "Keto Chili",
    snack1: "Beef Jerky",
    snack2: "Raspberries"
  },
  monday: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack1: "",
    snack2: ""
  },
  tuesday: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack1: "",
    snack2: ""
  },
  wednesday: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack1: "",
    snack2: ""
  },
  thursday: {
    breakfast: "",
    lunch: "",
    dinner: "",
    snack1: "",
    snack2: ""
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
}

function App() {
  // Drawer open/close state
  const [open, setOpen] = useState(true);
  // Initialize meal plan from local storage or set to default template
  const [mealPlan, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("mealPlan")) || defaultState);

  return (
    <>
      <MealPlanContext.Provider value={{ mealPlan, dispatch }}>
        <NavBar setOpen={setOpen} open={open} />
        <Main setOpen={setOpen} open={open} />
      </MealPlanContext.Provider>
    </>
  );
}

export default App;
