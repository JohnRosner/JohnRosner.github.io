import React from 'react';

import { Stack, Typography } from "@mui/material";

export const About = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">
				About Me
			</Typography>
			<Typography varient='p'>
				I grew up in Livonia. Loved legos and robots from a small age. In Elementry School, I was introduced to Lego Mindstorms and Scratch, both 
				perfect for young me to start developing my interests.
			</Typography>
			<Typography varient='p'>
				In middle school I joined our FTC team and started learning trombone. In high school I got good
			</Typography>
			<Typography varient='p'>
				After high school, I came to U of M to study computer science. Joined the marching band. Became section leader
			</Typography>
			<Typography varient='p'>
				I'm still deciding what to do next
			</Typography>
		</ Stack>
	);
}