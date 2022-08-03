import React from 'react';

import { Stack, Typography } from "@mui/material"

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
            <Typography variant='p'>
                I did this cool project
            </Typography>
            <iframe
                style={videoStyle}
                src={'https://www.youtube.com/embed/uV2OP7v6lY0'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Stack>
    )
}