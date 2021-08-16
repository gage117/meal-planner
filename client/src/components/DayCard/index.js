import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function DayCard({ day }) {
    return (
        <Grid
            container
            direction="column"
        >
            { day }
            <label>Breakfast</label>
            <Select value={day.breakfast}>
                <MenuItem value={'Bacon'}>Bacon</MenuItem>
                <MenuItem value={'Eggs'}>Eggs</MenuItem>
                <MenuItem value={'Omelette'}>Omelette</MenuItem>
            </Select>
            <label>Lunch</label>
            <Select value={day.lunch}>
                <MenuItem value={'Bacon'}>Bacon</MenuItem>
                <MenuItem value={'Eggs'}>Eggs</MenuItem>
                <MenuItem value={'Omelette'}>Omelette</MenuItem>
            </Select>
            <label>Dinner</label>
            <Select value={day.dinner}>
                <MenuItem value={'Bacon'}>Bacon</MenuItem>
                <MenuItem value={'Eggs'}>Eggs</MenuItem>
                <MenuItem value={'Omelette'}>Omelette</MenuItem>
            </Select>
            <label>Snackeroo 1</label>
            <Select value={day.snackeroo}>
                <MenuItem value={'Bacon'}>Bacon</MenuItem>
                <MenuItem value={'Eggs'}>Eggs</MenuItem>
                <MenuItem value={'Omelette'}>Omelette</MenuItem>
            </Select>
            <label>Snackeroo 2</label>
            <Select value={day.snackeroo}>
                <MenuItem value={'Bacon'}>Bacon</MenuItem>
                <MenuItem value={'Eggs'}>Eggs</MenuItem>
                <MenuItem value={'Omelette'}>Omelette</MenuItem>
            </Select>
        </Grid>
    )
}