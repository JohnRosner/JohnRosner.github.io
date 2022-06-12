import React from 'react';

import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {
    Routes,
    Route,
  } from "react-router-dom";
import { Menu } from './common';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { FunThings } from './pages/FunThings';

const pages = [
    {
        id: '',
        label: 'Home',
    }, 
    {
        id: 'experience',
        label: 'Experience',
    }, 
    {
        id: 'funthings',
        label: 'Fun Things',
    }, 
    {
        id: 'games',
        label: 'Games',
    }, 
];

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Roboto'
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: 'Roboto'
    }
});

function App() {
    const userPrefernce = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [darkMode, setDarkMode] = React.useState(userPrefernce);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Menu pages={pages} setDarkMode={setDarkMode} darkMode={darkMode} />
            <Container maxWidth='lg'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='games' element={<Games />} />
                    <Route path='funthings' element={<FunThings />} />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
