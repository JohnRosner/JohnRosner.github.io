import React from 'react';

import { Grid, Stack, Typography } from "@mui/material"

export const FunThings = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h2'>
                Fun Things
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <iframe
                        width="720"
                        height="405"
                        src={'https://www.youtube.com/embed/O4rViAGmN9w'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Grid>
                <Grid item md={4}>
                    <Typography variant='h4'>Achieved is the Glorious Work</Typography>
                    <Typography variant='p'>This is a recording I did myself in Summer 2021. Hope you enjoy!</Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography variant='h4'>Fly or Die</Typography>
                    <Typography variant='p'>Here is a really cool trombone solo</Typography>
                </Grid>
                <Grid item md={8}>
                    <iframe
                        width="720"
                        height="405"
                        src={'https://www.youtube.com/embed/RB9vJpNYuL0'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Grid>
                <Grid item md={8}>
                    <iframe
                        width="720"
                        height="405"
                        src={'https://www.youtube.com/embed/4czjS9h4Fpg'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Grid>
                <Grid item md={4}>
                    <Typography variant='h4'>Perseverance Rover's Descent and Touchdown</Typography>
                    <Typography variant='p'>This is my favorite video on youtube. It show's the Mars Perseverance Rover's Descent and Touchdown on the planet.</Typography>
                </Grid>
            </Grid>
        </Stack>
        
    )
}