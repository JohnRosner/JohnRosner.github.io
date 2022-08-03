import React from 'react';

import { Grid, Stack, Typography } from "@mui/material";

const imgStyle = {
	'max-width': '100%',
}

export const About = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">
				About Me
			</Typography>
			<Typography varient='p'>
				I am originally from and grew up in Livonia, MI, a suburb of Detroit. From a young age I knew I wanted to be an engineer because my dad was an engineer,
				and I knew I wanted to be like him. I loved playing with Legos and was fascinated by robots. I was introduced to Scratch, a programming language
				for young children, and I feel in love with it. Additionally, I was introduced to Lego Mindstorms, a Lego kit with motors, sensors, and a programmable 
				brain. I enjoyed playing around with both Scratch and Mindstorms, and I started to develop an interest in programming and robotics.
			</Typography>
			<Typography varient='p'>
				In middle school, I joined our FTC team where I was exposed to the next level of robots. It was also around then I started learning how to play trombone.
				In high school, I got to join our FRC team, where I learned my first real programming language, Java. My freshman and sophmore years we're filled with learning
				about Java and learning about programming the robot. In my Junior and Senior years I finally started making significant contributions. I wrote significant amounts
				of the code that drove the robot and controlled it during the autonomous period. Below are two pictures of me at robotics competitions, the left picture shows
				the drive team at a district competition we won, and the right shows a picture of me driving the robot at an off season competition. Additionally in high school,
				playing trombone was a big part of my life. I was in marching band for 4 years and in pit orchestra for 3 years. Finally, during my senior year I had the opportunity
				to play with some fantastic groups. I auditioned for All-State ensembles and was selected as the first chair trombone player for the All-State Band. I also made
				it into the Michigan Youth Arts Honors Orchestra. Both of these groups are filled with the best high school musicians and it was an amazing experience to play
				with them. 
			</Typography>
			<Typography varient='p'>
				I graduated high school in May 2019 and entered the University of Michigan the following fall to study computer science. I joined the Michigan Marching Band and
				immediately feel in love with the ensemble. I've meet many great friends and have gotten the opportunity to travel with the Band to the Citirus Bowl, the Big Ten
				Championship, and the Orange Bowl. During my final year in the band, I got to serve as the Trombone section leader. 
			</Typography>
			<Typography varient='p'>
				I will soon be graduating from U of M in December 2022. I have not decided where I am going next and I'm actively looking for opportunities.
			</Typography>
			<Grid container spacing={2} >
				<Grid item xs={6}>
					<img src='frc_win.jpeg' alt='Winning an FRC competition' style={imgStyle} />
				</Grid>
				<Grid item xs={6}>
					<img src='frc_driving.jpeg' alt='Driving at an FRC competition' style={imgStyle} />
				</Grid>
				<Grid item xs={12}>
					<img src='MMB.jpeg' alt='John in the MMB' style={imgStyle} />
				</Grid>
			</Grid>
		</ Stack>
	);
}