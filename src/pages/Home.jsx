import React from 'react';

import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const imgStyle = {
	'max-width': '100%',
}

const buttonStyle = {
    'width': '100%',
}

export const Home = (props) => {
    let navigate = useNavigate()

    return (
        <Stack>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Typography variant='h2'>
                        John Rosner
                    </Typography>
                    <Typography variant='h4'>
                        Software Engineer
                    </Typography>
                    <Typography variant='p'>
                        I am a Senior at the University of Michigan studying Computer Science with a minor in Music.
                        I have a strong interest in and am seeking a career in Autonomous Robotics. I have successfully
                        completed 2 summer internships at Amazon as a Software Development Engineer where I have gotten 
                        the opportunity to develop my skills in the real world. Outside of classes, I play trombone in
                        the Michigan Marching Band. I am currently searching for full time opportunities for after 
                        I graduate in December 2022!
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <img src='./JohnSenior.jpg' alt={'John'} style={imgStyle} />
                </Grid>
                <Grid item md={12}>
                    <Typography variant='p'>
                        Go ahead and explore my website! 
                    </Typography>
                </Grid>
                {props.pages.map((page) => {
                    if (page.id === '') return <></>;
                    return (
                        <>
                            <Grid item md={3}>
                                <Button variant="contained" style={buttonStyle} onClick={() => navigate(`/${page.id}`)}>{page.label}</Button>
                            </Grid>
                            <Grid item md={9}>
                                <Typography variant="p">
                                    {page.description}
                                </Typography>
                            </Grid>
                        </>
                    )
                })}
                <Grid item md={3}>
                    <Button variant="contained" style={buttonStyle} onClick={() => window.open('https://www.linkedin.com/in/john-rosner/')}>Connect</Button>
                </Grid>
                <Grid item md={9}>
                    <Typography variant="p">
                        Connect with me on LinkedIn!
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}