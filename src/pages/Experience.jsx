import React from 'react';

import { Grid, Stack, Typography } from "@mui/material"

const videoStyle = {
    'max-width': '100%',
    width: '720px',
    height: '405px',
}

export const Experience = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h2'>
                Experience
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <iframe
                        style={videoStyle}
                        src={'https://www.youtube.com/embed/uV2OP7v6lY0'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Grid>
                <Grid item md={4}>
                    <Typography variant='h4'>University of Michigan - Senior Design Project</Typography>
                    <Typography variant='p'>
                        In March and April 2022, Thomas Cohn and I teamed up to create our senior design project as a 
                        part of our class EECS 467 - Autonomous Robotics Design Experience. Our project was to create
                        an algorithm that took in real world mapping data recorded from a mobile robot and create a 
                        large scale map. 
                        <br />
                        <br />
                        <a target={'_blank'} rel={'noreferrer'} href={'https://tommycohn.com/projects/graphslam.html'}>Read more</a>
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}