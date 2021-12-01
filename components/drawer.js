import { useEffect } from 'react';
import Link from 'next/link';
import { useUser } from "@auth0/nextjs-auth0";
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
import { v4 as uuid } from 'uuid';

//!
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

let upperList = ['Meal Planner', 'Shopping List', 'Saved Recipes', 'Explore Recipes', 'How Foodroid Works'];
let lowerList = ['My Profile', 'Login', 'Logout'];
// Turn each item into an object and add unique id to each list item
upperList = upperList.map( listItem => {
  return {
    id: uuid(),
    text: listItem
  }
});
lowerList = lowerList.map( listItem => {
  return {
    id: uuid(),
    text: listItem
  }
});

function Drawer({open, setOpen}) {  
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const { user, loading } = useUser();

    if (loading) return <p>...</p>;
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
          {upperList.map((listItem) => {
            switch (listItem.text) {
            case 'Meal Planner':
              return (
                <Link href={"/planner"} key={listItem.id}>
                  <ListItem button >
                    <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                      <TodayIcon  />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text}  />
                  </ListItem>
                </Link>
              )
            case 'Shopping List':
              return (
                <Link href={"/shopping-list"} key={listItem.id}>
                  <ListItem button >
                    <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                      <ListAltIcon  />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text}  />
                  </ListItem>
                </Link>
              )
            case 'Saved Recipes':
              return (
                <Link href={"/saved-recipes"} key={listItem.id}>
                  <ListItem button >
                    <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                      <FavoriteBorderIcon  />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text}  />
                  </ListItem>
                </Link>
              )
            {/* case 'Explore Recipes':
              return (
                <Link href={"/explore"} key={listItem.id}>
                  <ListItem button key={listItem.id}>
                    <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                      <ExploreIcon />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text} />
                  </ListItem>
                </Link>
              )
            case 'How Foodroid Works':
              return (
                <Link href={"/how-it-works"} key={listItem.id}>
                  <ListItem button key={listItem.id}>
                    <ListItemIcon classes={{root: classes.iconWidthOverride}}>
                      <HelpOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text} />
                  </ListItem>
                </Link>
              ) */}
            default:
              break;
          }})}
        </List>
        <Divider />
        <List>
          {lowerList.map((listItem) => {
            switch (listItem.text) {
              case 'My Profile':
                return user && (
                  <Link href={"/profile"} key={listItem.id}>
                    <ListItem button >
                      <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                        <AccountCircleIcon  />
                      </ListItemIcon>
                      <ListItemText primary={listItem.text}  />
                    </ListItem>
                  </Link>
                );
              case 'Login':
                {/* <ListItem button key={listItem.id} onClick={() => loginWithRedirect()}> */}
                return !user && (
                  <ListItem button key={listItem.id} onClick={() => window.location.replace("api/auth/login")}>
                    <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                      <ExitToAppIcon  />
                    </ListItemIcon>
                    <ListItemText primary={listItem.text}  />
                  </ListItem>
                )
              case 'Logout':
                return user && (
                    <ListItem button key={listItem.id} onClick={() => window.location.replace("/api/auth/logout?returnTo=" + window.location.origin)}>
                      <ListItemIcon classes={{root: classes.iconWidthOverride}} >
                        <ExitToAppIcon  />
                      </ListItemIcon>
                      <ListItemText primary={listItem.text}  />
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