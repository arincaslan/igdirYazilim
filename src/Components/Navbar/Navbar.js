import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './Navbar.module.css';
import { ListItemText,ListItem,ListItemButton  } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

export default function Navbar() {

    const NavItems = ['Anasayfa', 'Hizmetlerimiz', 'Ekibimiz', 'Hakkımızda', 'İletişim']


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
          {NavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}     
        </Toolbar>
      </AppBar>
    </Box>
  );
}
