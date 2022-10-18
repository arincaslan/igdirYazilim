import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './Navbar.module.css';
import { ListItemText,ListItem,ListItemButton  } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {



  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className={classes.box} position="static">
        <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        <div style={{display : 'flex', alignItems: 'center', float:'right'}}> 
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <Link  className={classes.link} to="/">Anasayfa</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton disableRipple='true' sx={{ textAlign: 'center' }}>
              <ListItemText>
               <a style={{padding: '23px 50px' , textDecoration: 'none', color:'white'}} href='#servicesDirect'>Hizmetlerimiz</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
              <a style={{padding: '23px 50px' , textDecoration: 'none', color:'white'}} href='#aboutDirect'>Hakkımızda</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
              <a style={{padding: '23px 50px' , textDecoration: 'none', color:'white'}} href='#teamDirect'>Ekibimiz</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>  
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <Link className={classes.link} to="/services">İletişim</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;
