import React from 'react';
import { createTheme, CssBaseline, Divider, Drawer, FormControlLabel, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Switch, ThemeProvider,} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const pages = ['Home', 'Experience', 'Fun Things', 'Games'];
const drawerWidth = 240;

const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
  const userPrefernce = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(userPrefernce);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid container direction={'row'} alignItems='flex-start' justifyContent={'space-between'}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleMenuOpen}
          size='large'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <FormControlLabel label={darkMode ? 'Dark' : 'Light'} control={<Switch onChange={() => setDarkMode(!darkMode)} defaultChecked />} labelPlacement='end' />
      </Grid>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleMenuClose} size='large'>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List>
        <Divider />
          {pages.map((text, index) => (
            <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
            </>
          ))}
          <ListItem key='Connect' disablePadding>
            <ListItemButton onClick={() => window.open('https://www.linkedin.com/in/john-rosner/')}>
              <ListItemText primary='Connect' />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default App;
