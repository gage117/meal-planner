import Grid from '@material-ui/core/Grid';
import DayCard from '../DayCard';

export default function PlannerGrid() {
  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  return (
    <Grid>
      {days.map(day => (
        <DayCard key={day} day={day} />
      ))}
    </Grid>
  );
}