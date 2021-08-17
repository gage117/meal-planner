import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DayCard from '../DayCard';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  const [plannerState, setPlannerState] = useState({
    sunday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    monday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    tuesday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    wednesday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    thursday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    friday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    },
    saturday: {
      breakfast: "",
      lunch: "",
      dinner: "",
      snack1: "",
      snack2: ""
    }
  });

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
            plannerState={plannerState} 
            setPlannerState={setPlannerState}  
          />
        </Grid>
      ))}
    </Grid>
  );
}