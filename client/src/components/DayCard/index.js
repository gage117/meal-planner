import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function DayCard({ day }) {
    return (
        <Card>
            <Grid
                container
                direction="column"
            >
                <CardHeader
                    title={day}
                />
                <InputLabel id={`${day}Breakfast`}>Breakfast</InputLabel>
                <Select labelId={`${day}Breakfast`}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Lunch`}>Lunch</InputLabel>
                <Select labelId={`${day}Lunch`}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Dinner`}>Dinner</InputLabel>
                <Select labelId={`${day}Dinner`}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Snackeroo1`}>Snackeroo 1</InputLabel>
                <Select labelId={`${day}Snackeroo1`}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
                <InputLabel id={`${day}Snackeroo2`}>Snackeroo 2</InputLabel>
                <Select labelId={`${day}Snackeroo2`}>
                    <MenuItem value={'Bacon'}>Bacon</MenuItem>
                    <MenuItem value={'Eggs'}>Eggs</MenuItem>
                    <MenuItem value={'Omelette'}>Omelette</MenuItem>
                </Select>
            </Grid>
        </Card>
    )
}