import { useContext, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {MealPlanContext} from '../utils/MealPlanContext';
import { makeStyles } from '@mui/styles';
import {
    Grid, 
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Box,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .onHand.true' : {
          color: 'green'
      },
      '& .onHand.false' : {
          color: 'red'
      },
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));


function reduceIngredients(mealPlan) {
    const ingredientTotals = {};
    let idIncrementer = 0;
    // Go over each meal of the day\
    Object.values(mealPlan).forEach(mealArray => {
        // Go over each meal in that array
        return Object.values(mealArray).forEach(meal => {
            // Go over each ingredient in that meal
            if (!meal.ingredients) return;
            return meal.ingredients.forEach((ingredient) => {
                // TODO: Implement unit conversion
                if (ingredientTotals[ingredient.name] && ingredientTotals[ingredient.name].unit === ingredient.unit ) {
                    ingredientTotals[ingredient.name].quantity += ingredient.quantity;
                } else {
                    ingredientTotals[ingredient.name] = {
                        id: idIncrementer,
                        ingredient: ingredient.name,
                        quantity: ingredient.quantity,
                        unit: ingredient.unit,
                    };
                    idIncrementer++;
                }
            })
        })
    })
    return Object.values(ingredientTotals).sort((a, b) => a.ingredient.localeCompare(b.ingredient));
}

export default function ShoppingList(props) {
    const { mealPlan, dispatch } = useContext(MealPlanContext);
    const classes = useStyles();

    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        dispatch({type: "MODIFY_INGREDIENT_TOTALS", payload: reduceIngredients(mealPlan)})
    }, []);
    

    return (
        <Box className={{...classes.root, ...props.classes}}> {/* Merge classes */}
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={classes.root}>
                <Typography variant="h6" className={classes.title}>
                    Shopping List
                </Typography>
                <div className={classes.demo}>
                    <List>
                    {mealPlan.ingredientTotals && mealPlan.ingredientTotals.length ? mealPlan.ingredientTotals.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient.ingredient} secondary={`Quantity: ${ingredient.quantity} ${ingredient.unit}`}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                <CheckCircleIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        ))
                    : (
                        <Typography variant="h4">
                            No meals selected in the meal planner. Try selecting some meals in the meal planner to see their ingredients as well as their amounts aggregated into a shopping list here.
                        </Typography>
                    )
                    }
                    </List>
                </div>
            </Grid>
        </Grid>
        </Box>
    )
}