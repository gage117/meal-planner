import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  autoMarginLeft: {
    marginLeft: 'auto'
  },
  removeBottomPadding: {
    padding: '16px 16px 0 16px',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeCard({ meal }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={meal.name}
        className={classes.removeBottomPadding}
      />
      {/* <CardMedia
        className={classes.media}
        image={meal.image}
        title="Paella dish"
      /> */}
      <CardContent>
        {meal.tags.map(tag => (<Chip label={tag} variant="outlined" />))}
        <Typography paragraph color="textSecondary">{meal.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography className={classes.autoMarginLeft} >More Info</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4">Instructions</Typography>
          <hr />
          <ul>
            {meal.instructions.map(instruction => {
              return (
                <li>
                  <Typography paragraph>{instruction}</Typography>
                </li>
              )
            })}
          </ul>
          <Typography variant="h4">Ingredients</Typography>
          <hr />
          <ul>
            {meal.ingredients.map(({name, unit, quantity}) => {
              return (
                <li>
                  <Typography paragraph>{`${name}: ${quantity} ${unit}`}</Typography>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}