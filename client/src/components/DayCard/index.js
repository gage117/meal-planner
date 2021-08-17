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

export default function DayCard({ day, plannerState, setPlannerState }) {
    const classes = useStyles();

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
                <InputLabel id={`${day}Breakfast`}>Breakfast</InputLabel>
                <Select labelId={`${day}Breakfast`} className={classes.selectInput} value={plannerState[day.toLowerCase()].breakfast}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Lunch`}>Lunch</InputLabel>
                <Select labelId={`${day}Lunch`} className={classes.selectInput} value={plannerState[day.toLowerCase()].lunch}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Dinner`}>Dinner</InputLabel>
                <Select labelId={`${day}Dinner`} className={classes.selectInput} value={plannerState[day.toLowerCase()].dinner}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Snackeroo1`}>Snackeroo 1</InputLabel>
                <Select labelId={`${day}Snackeroo1`} className={classes.selectInput} value={plannerState[day.toLowerCase()].snack1}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Snackeroo2`}>Snackeroo 2</InputLabel>
                <Select labelId={`${day}Snackeroo2`} className={classes.selectInput} value={plannerState[day.toLowerCase()].snack2}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
            </Grid>
        </Card>
    )
}