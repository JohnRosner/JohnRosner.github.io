import React from 'react';

import { Grid, IconButton, Divider, Drawer, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Switch, styled } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}));

export const Menu = (props) => {
    const [open, setOpen] = React.useState(false);
    let navigate = useNavigate();

    const handleMenuOpen = () => {
        setOpen(true);
    };

    const handleMenuClose = () => {
        setOpen(false);
    };

    return (
        <>
            <DrawerHeader>
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
                    <FormControlLabel label={props.darkMode ? 'Dark' : 'Light'} control={<Switch onChange={() => props.setDarkMode(!props.darkMode)} defaultChecked />} labelPlacement='end' />
                </Grid>
            </DrawerHeader>
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
                BackdropProps={{ invisible: true }}
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleMenuClose} size='large'>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Divider />
                    {props.pages.map((page) => (
                        <>
                            <ListItem key={page.id} disablePadding>
                                <ListItemButton onClick={() => {
                                    navigate(`/${page.id}`);
                                    handleMenuClose();
                                }}>
                                    <ListItemText primary={page.label} />
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
        </>
    )
}