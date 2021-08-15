import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Drawer, drawerWidth} from '../../components/Drawer';
import PlannerGrid from '../../components/PlannerGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Main({open, setOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <PlannerGrid />
      </main>
    </div>
  );
}