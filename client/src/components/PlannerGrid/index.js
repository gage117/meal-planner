import Grid from '@material-ui/core/Grid';

export default function PlannerGrid() {
  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  return (
    <Grid>
      {days.map((day, index) => (
        <div key={index}>
          {day}
        </div>
      ))}
    </Grid>
  );
}