import React from 'react';

import { FormControlLabel, Switch, AppBar, Toolbar, Typography, Button } from "@mui/material"

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

export const Menu = (props) => {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        John Rosner's Personal Site
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
                        {props.pages.map((page) => (        
                            <Button key={page.id} onClick={() => navigate(`/${page.id}`)} color={'inherit'}>
                                {page.label}
                            </Button>
                        ))}
                        <Button key={'connect'} onClick={() => window.open('https://www.linkedin.com/in/john-rosner/')} color={'inherit'}>
                            Connect
                        </Button>
                    </Box> 
                    <FormControlLabel 
                        label={props.darkMode ? 'Dark' : 'Light'} 
                        control={<Switch onChange={() => props.setDarkMode(!props.darkMode)} defaultChecked />} 
                        labelPlacement='end' 
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}