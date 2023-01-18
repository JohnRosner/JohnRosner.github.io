import React from 'react';

import { Grid, Stack, Typography } from "@mui/material";
// import { useNavigate } from 'react-router-dom';


const imgStyle = {
	'max-width': '100%',
}

// const buttonStyle = {
//     'width': '100%',
// }

export const Home = (props) => {
    // let navigate = useNavigate()

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
                        I am a recent graduate from the University of Michigan with a degree 
                        in Computer Science with a minor in Music seeking to begin my career 
                        in Software Engineering. I have successfully completed two summer internships 
                        at Amazon as a Software Development Engineer where I had the opportunity to 
                        develop my skills in the real world. Outside of class, I played trombone in 
                        the Michigan Marching Band where I served as the Trombone section leader.
                        I am currently searching for full time an entry level Software Engineering role.
                        <br/>
                        <br/>
                        {/* Go ahead and explore my website! */}
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <img src='./JohnPortrait.jpeg' alt={"John's Portrait"} style={imgStyle} />
                </Grid>
                {/* <Grid item md={12}>
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
                </Grid> */}
            </Grid>
        </Stack>
    )
}