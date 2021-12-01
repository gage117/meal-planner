import { createContext, useReducer, useEffect } from "react";
import meals from '../utils/Foodroid_Template';

export const MealPlanContext = createContext();

const defaultState = {
  sunday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  monday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  tuesday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  wednesday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  thursday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  friday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  },
  saturday: {
    breakfast: {},
    lunch: {},
    dinner: {},
    snack1: {},
    snack2: {}
  }
}

const reducer = (state, action) => {
    if (!action.type || !action.payload) {
      return state;
    }
    
    switch (action.type) {
      case "MODIFY_MEALS":
        const {payload} = action;
        if (!payload.day || !payload.whichMeal) {
          return state;
        }

        if (payload.mealName === "") {
          state[payload.day.toLowerCase()][payload.whichMeal.toLowerCase()] = {};
        } else if (payload.mealName === "none") {
          state[payload.day.toLowerCase()][payload.whichMeal.toLowerCase()] = {name: "none"};
        } else {
          // Filter through meals array to find meal object by mealName
          let mealObj = null;

          let i = 0, len = meals.length, mealFound = false;
          while (mealFound === false && i < len) {
            if(meals[i].name === payload.mealName) {
              mealObj = meals[i];
              mealFound = true;
            }
            i++;
          }
          if(!mealObj) return state

          // Modify meal in state and then return copy of state
          state[payload.day.toLowerCase()][payload.whichMeal.toLowerCase()] = {...mealObj};
        }

        localStorage.setItem("mealPlan", JSON.stringify(state));
        return state = { ...state };
      case "MODIFY_INGREDIENT_TOTALS":
        // Modify ingredient totals
        state.ingredientTotals = action.payload;
        return {...state};
      case "CLEAR_MEAL_PLAN":
        state = defaultState;
        localStorage.setItem("mealPlan", JSON.stringify(state));
        return state;
      default:
        return state;
    }
  }

const MealPlanProvider = ({children}) => {
    // Initialize meal plan to default template
    const [mealPlan, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => { // Load meal plan from local storage, must be within useEffect in Next.js
      const mealPlanFromStorage = JSON.parse(localStorage.getItem("mealPlan"));
      if (mealPlanFromStorage) {
        dispatch({type: "MODIFY_MEALS", payload: mealPlanFromStorage});
      }
    }, []);
    
    return (
        <MealPlanContext.Provider value={{mealPlan, dispatch}}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default MealPlanProvider;