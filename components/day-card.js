import { useContext } from 'react';
import {MealPlanContext} from '../utils/MealPlanContext';
import { makeStyles } from '@mui/styles';
import {
        Card,
        CardHeader,
        Grid,
        Select,
        InputLabel,
        MenuItem
        } from '@mui/material';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        padding: '0 10px 0px 10px',
        // margin: '20px',
        // maxWidth: '300px'
    },
    selectInput: {
        marginBottom: '15px'
    },
    textCenter: {
        textAlign: 'center'
    },
}));

export default function DayCard({ day, meals }) {
    const { mealPlan, dispatch } = useContext(MealPlanContext);

    const classes = useStyles();

    const handleSelectChange = ({name, value}) => {
        // Split name param at dash to get day and which meal of the day (i.e. breakfast)
        const [day, whichMeal] = name.split('-');
        const mealName = value;

        dispatch({type: "MODIFY_MEALS", payload: {day, whichMeal, mealName}});
    }


    return (
        <Card className={classes.cardContainer}>
            <Grid
                container
                direction="column"
            >
                <CardHeader
                    title={day}
                    className={classes.textCenter}
                />
                <InputLabel id={`${day}-breakfast`}>Breakfast</InputLabel>
                <Select labelId={`${day}-breakfast`} name={`${day}-breakfast`} className={classes.selectInput} value={mealPlan[day.toLowerCase()].breakfast.name || ""} onChange={(e) => handleSelectChange(e.target)}>
                    <MenuItem value="none" >
                        None
                    </MenuItem>
                    {meals.breakfasts.map(meal => (
                        <MenuItem key={meal.name} value={meal.name} >
                            {meal.name}
                        </MenuItem>
                    ))}
                </Select>
                <InputLabel id={`${day}-lunch`}>Lunch</InputLabel>
                <Select labelId={`${day}-lunch`} name={`${day}-lunch`} className={classes.selectInput} value={mealPlan[day.toLowerCase()].lunch.name || ""} onChange={(e) => handleSelectChange(e.target)}>
                    <MenuItem value="none" >
                        None
                    </MenuItem>
                    {meals.lunches.map(meal => (
                        <MenuItem key={meal.name} value={meal.name} >
                            {meal.name}
                        </MenuItem>
                    ))}
                </Select>
                <InputLabel id={`${day}-dinner`}>Dinner</InputLabel>
                <Select labelId={`${day}-dinner`} name={`${day}-dinner`} className={classes.selectInput} value={mealPlan[day.toLowerCase()].dinner.name || ""} onChange={(e) => handleSelectChange(e.target)}>
                    <MenuItem value="none" >
                        None
                    </MenuItem>
                    {meals.dinners.map(meal => (
                        <MenuItem key={meal.name} value={meal.name} >
                            {meal.name}
                        </MenuItem>
                    ))}
                </Select>
                <InputLabel id={`${day}-snackeroo1`}>Snackeroo 1</InputLabel>
                <Select labelId={`${day}-snackeroo1`} name={`${day}-snack1`} className={classes.selectInput} value={mealPlan[day.toLowerCase()].snack1.name || ""} onChange={(e) => handleSelectChange(e.target)}>
                    <MenuItem value="none" >
                        None
                    </MenuItem>
                    {meals.snacks.map(meal => (
                        <MenuItem key={meal.name} value={meal.name} >
                            {meal.name}
                        </MenuItem>
                    ))}
                </Select>
                <InputLabel id={`${day}-snackeroo2`}>Snackeroo 2</InputLabel>
                <Select labelId={`${day}-snackeroo2`} name={`${day}-snack2`} className={classes.selectInput} value={mealPlan[day.toLowerCase()].snack2.name || ""} onChange={(e) => handleSelectChange(e.target)}>
                    <MenuItem value="none" >
                        None
                    </MenuItem>
                    {meals.snacks.map(meal => (
                        <MenuItem key={meal.name} value={meal.name} >
                            {meal.name}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </Card>
    )
}