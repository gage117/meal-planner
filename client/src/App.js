import { useState, useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Box} from '@material-ui/core';
import NavBar from './components/NavBar';
import {Drawer, drawerWidth} from './components/Drawer';
import PlannerGrid from './pages/PlannerGrid';
import ShoppingList from './pages/ShoppingList';
import MealPlanContext from './utils/MealPlanContext';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();

  // Drawer open/close state
  const [open, setOpen] = useState(true);
  // Initialize meal plan from local storage or set to default template
  const [mealPlan, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("mealPlan")) || defaultState);

  return (
    <MealPlanContext.Provider value={{ mealPlan, dispatch }}>
      <Router>
          <CssBaseline />
          <NavBar setOpen={setOpen} open={open} />
          <Box className={classes.root}>
            <Drawer open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
              >
              <Switch>
                <Route exact path="/" component={PlannerGrid} />
                <Route path="/planner" component={PlannerGrid} />
                <Route path="/shopping-list" component={ShoppingList} />
              </Switch>
            </main>
          </Box>
      </Router>
    </MealPlanContext.Provider>
  );
}

export default App;
