import Grid from '@material-ui/core/Grid';
import DayCard from '../../components/DayCard';

const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

export default function PlannerGrid() {
  // TODO: Set from database call
  const meals = {
    breakfasts: [
      "Keto Egg Muffins",
      "Fried Eggs",
      "Omelette",
      "Fancy Yogurt"
    ],
    lunches: [
      "Tuna Lunch Salad",
      "Keto Lettuce Wraps",
      "Bacon Wrapped Asparagus",
      "Keto Taquitos"
    ],
    dinners: [
      "Keto Chili",
      "Meatball Parm Casserole",
      "Steak",
      "Baked Salmon"
    ],
    snacks: [
      "Beef Jerky",
      "Hard Boiled Eggs",
      "String Cheese",
      "Pickles",
      "Pork Rinds",
      "Pecans",
      "Almonds",
      "Walnuts",
      "Greek Yogurt",
      "Cottage Cheese",
      "Blackberries",
      "Raspberries"
    ]
  };

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
          meals={meals}
        />
      </Grid>
    ))}
  </Grid>
  )
}