import Grid from '@material-ui/core/Grid';
import DayCard from '../../components/DayCard';
import {template} from '../../utils/Foodroid_Template';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  // TODO: Set meals from database call

  return (
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
          meals={template.meals}
        />
      </Grid>
    ))}
  </Grid>
  )
}