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
    Box,
} from '@material-ui/core';
// import { DataGrid } from '@material-ui/data-grid';
// import clsx from 'clsx';
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';

// !!!
import {template} from './Foodroid_Template';

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

// const rows = [
//     { id:1, ingredient: 'Carrots', quantity: 3, unit: "" },
//     { id:2, ingredient: 'Potatoes', quantity: 3, unit: "lbs" },
//     { id:3, ingredient: 'Beef', quantity: 4, unit: "oz" },
//   ];
  
//   const columns = [
//     { field: 'id', headerName: 'ID', hide: true },
//     { field: 'ingredient', headerName: 'Ingredient', width: 250 },
//     { field: 'quantity', headerName: 'Quantity', width: 140 },
//     { field: 'unit', headerName: 'Unit', width: 130 },
//     { field: 'haveOnHand', headerName: 'Have On Hand', type: 'boolean', editable: true, width: 150,
//         cellClassName: (params) => {
//             clsx('onHand', {
//                 false: !params.value,
//                 true: !!params.value,
//             })
//         },    
//     },
//   ];

function reduceIngredients(mealPlan) {
    const ingredientTotals = {};
    let idIncrementer = 0;
    // Go over each meal of the day\
    Object.values(mealPlan.meals).map(mealArray => {
        // Go over each meal in that array
        console.log("MealArray: ", mealArray);
        return mealArray.map(meal => {
            console.log("Meal: ", meal);
            // Go over each ingredient in that meal
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

export default function ShoppingList() {
    const classes = useStyles();

    template.ingredientTotals = reduceIngredients(template);

    return (
        <MealPlannerContext.Consumer>
            {({mealPlan}) => (
                <Box className={classes.root}>
                {/* <DataGrid rows={template.ingredientTotals} columns={columns} autoHeight checkboxSelection/> */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className={classes.root}>
                        <Typography variant="h6" className={classes.title}>
                            Shopping List
                        </Typography>
                        <div className={classes.demo}>
                            <List>
                            {template.ingredientTotals.map((ingredient, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={ingredient.ingredient} secondary={`Quantity: ${ingredient.quantity} ${ingredient.unit}`}/>
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
                </Grid>
                </Box>
            )}
        </MealPlannerContext.Consumer>
    )
}