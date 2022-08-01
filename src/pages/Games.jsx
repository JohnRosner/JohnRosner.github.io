import React from 'react';

import { Stack, Typography } from "@mui/material"


export const Games = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h2'>
                Games
            </Typography>
            <Typography variant='p'>
                Soon there will be games here to play!
            </Typography>
        </Stack>
    )
}