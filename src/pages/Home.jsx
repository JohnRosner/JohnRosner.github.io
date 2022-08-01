import React from 'react';

import { Grid, Stack, Typography } from "@mui/material"


export const Home = () => {
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
                    <img src='./JohnSenior.jpg' height={320} width={250} alt={'John'} />
                </Grid>
                <Grid item md={12}>
                    <Typography variant='p'>
                        Check out the cool stuff here!
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}