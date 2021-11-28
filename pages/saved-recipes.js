import { Button, Grid } from '@mui/material';
import RecipeCard from '../components/recipe-card';
import meals from '../utils/seeds-gage';

export default function SavedRecipes() {
  // TODO: Set meals from database call

  return (
    <Grid
      container
      justifyContent="space-evenly"
      spacing={4}
    >
      {meals.map(meal => (
        <Grid item key={meal.name}>
          <RecipeCard 
            key={meal.name} 
            meal={meal}
          />
        </Grid>
      ))}
    </Grid>
  )
}