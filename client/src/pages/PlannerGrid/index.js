import { Button, Grid } from '@material-ui/core';
import DayCard from '../../components/DayCard';
import template from '../../utils/seeds-gage';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  // TODO: Set meals from database call
  const meals = {
    breakfasts: [],
    lunches: [],
    dinners: [],
    snacks: [],
  };
  let i = 0, len = template.length;
  while (i < len) {
    console.log(template[i])
    switch (template[i].mealOfTheDay) {
      case 'Breakfast':
        meals.breakfasts.push(template[i]);
        break;
      case 'Lunch':
        meals.lunches.push(template[i]);
        break;
      case 'Dinner':
        meals.dinners.push(template[i]);
        break;
      case 'Snack':
        meals.snacks.push(template[i]);
        break;
      default:
        break;
    }
    i++;
  }

  return (
    <>
      <Button variant="contained" color="primary">Clear Meal Plan</Button>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={4}
      >
        {days.map(day => (
          <Grid item xs={12} lg={3} key={day}>
            <DayCard 
              key={day} 
              day={day} 
              meals={meals}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}