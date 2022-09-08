import React from 'react';

import { Switch, AppBar, Toolbar, Button, Typography, Stack } from "@mui/material"

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

export const Menu = (props) => {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}> 
                        {props.pages.map((page) => (        
                            <Button key={page.id} onClick={() => navigate(`/${page.id}`)} color={'inherit'}>
                                {page.label}
                            </Button>
                        ))}
                        <Button key={'connect'} onClick={() => window.open('https://www.linkedin.com/in/john-rosner/')} color={'inherit'}>
                            Connect
                        </Button>
                    </Box> 
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography>
                            Light
                        </Typography>
                        <Switch onChange={() => props.setDarkMode(!props.darkMode)} defaultChecked={props.defaultDark} />
                        <Typography>
                            Dark
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}