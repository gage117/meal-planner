import MealPlannerContext from '../../utils/MealPlanContext';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, 
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 300,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

const mockPopulatedMealPlan = {
    breakfasts: [
        {
        name: "Keto Egg Muffins",
        instructions: [
            "Write out step 1",
            "Write out step 2",
            "Write out step 3"
        ],
        mealOfTheDay: "Breakfast",
        ingredients: [
            {
            name: "Sweet Potato",
            quantity: 1,
            unit: "",
            },
            {
            name: "Grated Cheddar",
            quantity: .25,
            unit: "cup",
            },
            {
            name: "Bacon",
            quantity: 2,
            unit: "strips",
            },
            {
            name: "Eggs",
            quantity: 1,
            unit: "",
            },
            {
            name: "Heavy Whipping Cream",
            quantity: 1,
            unit: "tbsp",
            }
        ],
        tags: [
            "egg",
            "muffins",
            "healthy",
            "low-calorie",
            "low-carb",
            "low-fat",
        ],
        user: { _id: "" },
        }
    ],
    lunches: [
        {
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
        }
    ],
    dinners: [
        {
        name: "Baked Salmon",
        instructions: [
            "Write out step 1",
            "Write out step 2",
            "Write out step 3"
        ],
        mealOfTheDay: "Dinner",
        ingredients: [
            {
            name: "Salmon",
            quantity: 4,
            unit: "oz",
            },
            {
            name: "Asparagus",
            quantity: 3,
            unit: "oz",
            },
            {
            name: "Parmesan Cheese",
            quantity: .25,
            unit: "cup",
            }
        ],
        tags: [
            "salmon",
            "asparagus",
            "healthy",
            "low-calorie",
            "low-carb",
            "low-fat",
        ],
        user: { _id: "" },
        }
    ],
    snacks: [
        {
        name: "Hard Boiled Eggs",
        instructions: [
            "Write out step 1",
            "Write out step 2",
            "Write out step 3"
        ],
        mealOfTheDay: "Snack",
        ingredients: [
            {
            name: "Eggs",
            quantity: 4,
            unit: "",
            }
        ],
        tags: [
            "eggs",
            "healthy",
            "low-calorie",
            "low-carb",
            "low-fat",
        ],
        user: { _id: "" },
        }
    ]
}

function reduceIngredients(mealPlan) {
    const ingredientTotals = {};
    // Go over each meal of the day
    Object.values(mealPlan).map(mealArray => {
        console.log(mealArray);
        // Go over each meal in that array
        mealArray.map(meal => {
            // Go over each ingredient in that meal
            meal.ingredients.forEach(ingredient => {
                // TODO: Implement unit conversion
                if (ingredientTotals[ingredient.name] && ingredientTotals[ingredient.name].unit === ingredient.unit ) {
                    ingredientTotals[ingredient.name].quantity += ingredient.quantity;
                } else {
                    ingredientTotals[ingredient.name] = {
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                        unit: ingredient.unit,
                    };
                }
            })
        })
    })
    return Object.values(ingredientTotals).sort((a, b) => a.name.localeCompare(b.name));
}

export default function ShoppingList() {
    const classes = useStyles();

    mockPopulatedMealPlan.ingredientTotals = reduceIngredients(mockPopulatedMealPlan);
    console.log(mockPopulatedMealPlan.ingredientTotals);

    return (
        <MealPlannerContext.Consumer>
            {({mealPlan}) => (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className={classes.root}>
                        <Typography variant="h6" className={classes.title}>
                            Shopping List
                        </Typography>
                        <div className={classes.demo}>
                            <List>
                            {mockPopulatedMealPlan.ingredientTotals.map((ingredient, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={ingredient.name} secondary={`Quantity: ${ingredient.quantity} ${ingredient.unit}`}/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                        <CheckCircleIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                ))}
                            </List>
                        </div>
                    </Grid>
                </Grid>)}
        </MealPlannerContext.Consumer>
    )
}