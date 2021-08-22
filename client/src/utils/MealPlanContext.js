import { createContext, useReducer } from "react";

export const MealPlanContext = createContext();

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

const reducer = (state, action) => {
    if (!action.day || !action.whichMeal || !action.mealName) {
      return state;
    }
    // Modify meal in state and then return copy of state
    state[action.day.toLowerCase()][action.whichMeal.toLowerCase()] = action.mealName;
    localStorage.setItem("mealPlan", JSON.stringify(state));
    return state = {
      ...state
    };
  }

const MealPlanProvider = ({children}) => {
    // Initialize meal plan from local storage or set to default template
    const [mealPlan, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("mealPlan")) || defaultState);
    
    return (
        <MealPlanContext.Provider value={{mealPlan, dispatch}}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default MealPlanProvider;