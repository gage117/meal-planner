import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, 
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import { CheckCircle as CheckCircleIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 300,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

export default function ShoppingList() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((item) => {
                return (
                    <Grid item xs={12} md={6} className={classes.root}>
                        <Typography variant="h6" className={classes.title}>
                            {item}
                        </Typography>
                        <div className={classes.demo}>
                            <List>
                            {[0, 1, 2].map(index => (
                                <ListItem key={index}>
                                    <ListItemText primary="Single-line item" />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                        <CheckCircleIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                ))}
                            </List>
                        </div>
                    </Grid>
                )})}
        </Grid>
    )
}