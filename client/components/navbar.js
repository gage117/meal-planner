import {useState} from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@mui/styles';
import {
          AppBar,
          Toolbar,
          Typography,
          IconButton,
          MenuItem,
          Menu
        } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({setOpen}) {
  const classes = useStyles();
  
  //!
  // const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
  const isAuthenticated = true;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foodroid
          </Typography>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {/* {isAuthenticated ? (
                  ['Profile', 'My Account', 'Logout'].map((listItem) => {
                    switch(listItem) {
                      case 'Logout':
                        return (
                          <MenuItem onClick={logout} key={listItem}>Logout</MenuItem>
                        )
                      default:
                        return (
                          <MenuItem onClick={handleClose} key={listItem}>{listItem}</MenuItem>
                        )
                    }
                  })
                ) : (
                  <MenuItem onClick={loginWithRedirect}>Login</MenuItem>
                )} */}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}