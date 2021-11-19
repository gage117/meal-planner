import Link from 'next/link';
// import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from '@mui/styles';
import {  Drawer as MuiDrawer,
          List, 
          Divider, 
          IconButton, 
          ListItem,
          ListItemIcon,
          ListItemText,
        } from '@mui/material';
import {  ChevronLeft as ChevronLeftIcon, 
          ChevronRight as ChevronRightIcon, 
          Today as TodayIcon, 
          FavoriteBorder as FavoriteBorderIcon,
          Explore as ExploreIcon,
          HelpOutline as  HelpOutlineIcon,
          AccountCircle as AccountCircleIcon,
          ExitToApp as ExitToAppIcon,
          ListAlt as ListAltIcon,
        } from '@mui/icons-material/';

// import stylesheet simply for accessing pseudo-elements because inline styles don't allow access to them
// import "./drawer-styles.css"
// a {
//   text-decoration: none;
// }

// a:link {
//   color: #000;
// }

// a:visited {
//   color: #000;
// }

// drawerWidth variable is declared in Main page
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  iconWidthOverride: {
    minWidth: "36px"
  },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

function Drawer({open, setOpen}) {  
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
    //!

    return (
        <MuiDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Meal Planner', 'Shopping List', 'Saved Recipes', 'Explore Recipes', 'How Foodroid Works'].map((text) => (
            <>
              {(() => {
                switch (text) {
                case 'Meal Planner':
                  return (
                    <Link href={"/planner"} key={text}>
                      <ListItem button key={text}>
                        <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                          <TodayIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  )
                case 'Shopping List':
                  return (
                    <Link href={"/shopping-list"} key={text}>
                      <ListItem button key={text}>
                        <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                          <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  )
                case 'Saved Recipes':
                  return (
                    <Link href={"/saved-recipes"} key={text}>
                      <ListItem button key={text}>
                        <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                          <FavoriteBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  )
                {/* case 'Explore Recipes':
                  return (
                    <Link href={"/explore"} key={text}>
                      <ListItem button key={text}>
                        <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                          <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  )
                case 'How Foodroid Works':
                  return (
                    <Link href={"/how-it-works"} key={text}>
                      <ListItem button key={text}>
                        <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                          <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    </Link>
                  ) */}
                default:
                  break;
              }})()}
            </>
          ))}
        </List>
        <Divider />
        <List>
          {['My Profile', 'Login', 'Logout'].map((text) => {
            switch (text) {
              case 'My Profile':
                {/* return isAuthenticated && */} 
                return (
                  <Link href={"/profile"} key={text}>
                    <ListItem button key={text}>
                      <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                );
              case 'Login':
                {/* <ListItem button key={text} onClick={() => loginWithRedirect()}> */}
                return (
                  <ListItem button key={text} >
                    <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              case 'Logout':
                {/* return isAuthenticated && (
                <ListItem button key={text} onClick={() => logout({ returnTo: window.location.origin })}> */}
                return (
                  <ListItem button key={text} >
                    <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              default:
                break;
            }
            }
          )}
        </List>
      </MuiDrawer>
    );
}

export { Drawer, drawerWidth };