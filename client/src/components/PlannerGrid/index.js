import Grid from '@material-ui/core/Grid';
import DayCard from '../DayCard';

export default function PlannerGrid() {
  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  return (
    <Grid
      container
      justifyContent="space-evenly"
      spacing={3}
    >
      {days.map(day => (
        <Grid item xs={12} lg={3} key={day}>
          <DayCard key={day} day={day} />
        </Grid>
      ))}
    </Grid>
  );
}