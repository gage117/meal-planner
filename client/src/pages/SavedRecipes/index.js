import { Button, Grid } from '@material-ui/core';
import RecipeCard from '../../components/RecipeCard';
import meals from '../../utils/seeds-gage';

export default function SavedRecipes() {
  // TODO: Set meals from database call

  return (
    <Grid
      container
      justifyContent="space-evenly"
      spacing={4}
    >
      {meals.map(meal => (
        <Grid item xs={12} lg={3} key={meal.name}>
          <RecipeCard 
            key={meal.name} 
            meal={meal}
          />
        </Grid>
      ))}
    </Grid>
  )
}