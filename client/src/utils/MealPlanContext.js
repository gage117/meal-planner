import { createContext, useReducer } from "react";
import { template } from './Foodroid_Template';

export const MealPlanContext = createContext();

const defaultState = {
  sunday: {
    breakfast: {
      name: "Fried Eggs",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Breakfast",
      ingredients: [
        {
          name: "Egg",
          quantity: 2,
          unit: "",
        },
        {
          name: "Butter",
          quantity: 1,
          unit: "tbsp",
        },
      ],
      tags: [
        "egg",
        "butter",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    lunch: {
      name: "Tuna Lunch Salad",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Lunch",
      ingredients: [
        {
          name: "Tuna (in brine)",
          quantity: 1,
          unit: "can",
        },
        {
          name: "Olive Oil",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Spinach",
          quantity: 1,
          unit: "cup",
        },
        {
          name: "Feta Cheese chunks",
          quantity: .25,
          unit: "cup",
        },
        {
          name: "Dijon Mustard",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Avocado",
          quantity: 1,
          unit: "tsp",
        }
      ],
      tags: [
        "tuna",
        "salad",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    dinner: {
      name: "Keto Chili",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Garlic",
          quantity: 2,
          unit: "cloves",
        },
        {
          name: "Onion",
          quantity: .5,
          unit: "",
        },
        {
          name: "Ground Beef",
          quantity: 1,
          unit: "lb",
        },
        {
          name: "Diced Tomato",
          quantity: 8,
          unit: "oz",
        },
        {
          name: "Cumin",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Paprika",
          quantity: .25,
          unit: "tsp",
        },
        {
          name: "Oregano",
          quantity: .25,
          unit: "tsp",
        },
        {
          name: "Chipotle Powder",
          quantity: .25,
          unit: "tsp",
        },
        {
          name: "Beef Broth",
          quantity: 16,
          unit: "fl oz",
        }
      ],
      tags: [
        "chili",
        "beef",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    snack1: {
      name: "Beef Jerky",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "Beef jerky",
          quantity: 2,
          unit: "oz",
        }
      ],
      tags: [
        "meat",
        "vegan",
        "low-carb",
      ],
      user: { _id: "" },
    },
    snack2: {
      name: "String Cheese",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "String Cheese",
          quantity: 1,
          unit: "",
        }
      ],
      tags: [
        "dairy",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
        "snack"
      ],
      user: { _id: "" },
    }
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
        if (!payload.day || !payload.whichMeal || !payload.mealName) {
          return state;
        }
        
        // Filter through meals array to find meal object by mealName
        let mealObj;
        for(const mealArray of Object.values(template.meals)) {
          for(const meal of mealArray) {
            if(meal.name === payload.mealName) {
              mealObj = meal;
            }
          }
        }

        if(!mealObj) {
          return state;
        }

        // Modify meal in state and then return copy of state
        state[action.day.toLowerCase()][action.whichMeal.toLowerCase()] = {...mealObj};
        localStorage.setItem("mealPlan", JSON.stringify(state));
        return state = {
          ...state
        };
      case "MODIFY_INGREDIENT_TOTALS":
        // Modify ingredient totals
        return;
      default:
        return state;
    }
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