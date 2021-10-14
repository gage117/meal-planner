import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Box} from '@material-ui/core';
import NavBar from './components/NavBar';
import {Drawer, drawerWidth} from './components/Drawer';
import PlannerGrid from './pages/PlannerGrid';
import ShoppingList from './pages/ShoppingList';
import SavedRecipes from './pages/SavedRecipes';

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
  const [open, setOpen] = useState(false);

  return (
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
                <Route path="/saved-recipes" component={SavedRecipes} />
              </Switch>
            </main>
          </Box>
      </Router>
  );
}

export default App;
