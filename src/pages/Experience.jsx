import React from 'react';

import { Stack, Typography } from "@mui/material"


export const Experience = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h2'>
                Experience
            </Typography>
            <Typography variant='p'>
                I got 2 internships at Amazon. I did robotics in high school. I did this cool project
            </Typography>
            <iframe
                width="720"
                height="405"
                src={'https://www.youtube.com/embed/uV2OP7v6lY0'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Stack>
    )
}