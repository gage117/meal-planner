import { useContext } from 'react';
import {MealPlanContext} from '../../utils/MealPlanContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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

export default function RecipeCard({ meal }) {
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
                    title={meal.name}
                    className={classes.textCenter}
                />
            </Grid>
        </Card>
    )
}