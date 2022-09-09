import React from 'react';

import { Grid, Stack, Typography } from "@mui/material"

const videoStyle = {
    'max-width': '100%',
    width: '720px',
    height: '405px',
}

const imgStyle = {
    'max-width': '100%',
    'max-height': '100%',
}

export const Experience = ({ dark }) => {
    console.log(dark)
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
                <Grid item md={8}>
                    <Typography variant='h4'>Amazon - Internships</Typography>
                    <Typography variant='p'>
                        During the summer of 2021, I completed my first internship at Amazon as a Software Development Engineer (SDE). 
                        I worked for a team based in Detroit, MI which was a part of the Selling Partner Services organization. My team 
                        was responsible for maintaining a service that authorizes third-party seller applications. For engineers on my 
                        team to test the service, they needed test applications to use. Their method for creating and organizing these 
                        test applications was a long, slow, and disorganized process. Creating a test application could take 30 minutes 
                        to an hour and they were often organized in large spreadsheets. This was not ideal. I was tasked with 
                        creating a tool to automate and organize this process. I developed this tool in two parts: a back-end service 
                        written in Java, and a front-end written with React. The hardest part for me during this internship was dealing 
                        with the infrastructure of my project. Everything had to be set up: the code repositories, the AWS accounts 
                        the project would be deployed two, the pipeline that would deploy the code, and much more. I spent the first 
                        half of the internship setting up the infrastructure and creating the back-end and the remaining half creating 
                        the front-end. Unfortunately, I did not finish the project. The biggest remaining piece was connecting the 
                        front-end to the back-end, which I was unable to accomplish. I had still learned a lot about software 
                        development in the real world, about working on large projects, and most importantly, working with other 
                        engineers. Even though I did not complete my project, my team gave me an offer to return to Amazon 
                        the next summer.
                        <br />
                        <br />
                        In the summer of 2022, I returned to Amazon as an SDE intern working for Amazon Robotics. My team worked 
                        entirely remotely and spread across North America, so I stayed in Michigan. My team was developing a 
                        new service to collect data within an Amazon warehouse, and the new service needed a web-based dashboard 
                        to manage it. They saw my previous experience doing some web development in my last internship and thought 
                        this would be the perfect project for me. Before I joined the team, they had already set up the infrastructure 
                        for the dashboard by using an internal website template. The template had everything I needed to get started: 
                        a front-end using React, a back-end using NodeJS, and GraphQL to communicate between the two. I also spent 
                        some time in the beginning completing some online training about AWS, which proved to be very useful later 
                        in my internship. Since I did not complete my project the previous summer, I wanted to make sure I left this 
                        internship with a working project. The most important feature of the dashboard my team needed was the ability 
                        for a user to view and edit the configuration for an instance of the service. With this feature alone, the 
                        dashboard would be a minimum viable product (MVP). We set the goal that I would have the MVP complete 
                        within 2 months. I started by working on the front-end of the dashboard and implemented features of the 
                        back-end as they were needed by the front-end. A week before our set deadline for the MVP, I completed it 
                        and I started to work on the next big feature: viewing the status and metrics related to an instance of the 
                        service. With the remaining month I had, I was also able to complete this feature as well as many other 
                        small "nice to have" features. By the end, I completed my project and achieved multiple stretch goals.
                        <br />
                        <br />
                        Both of my internships taught me a great deal about developing software in the real world and I'm grateful for 
                        the experiences I was given. I was not able to complete my project during my first internship, but I took what 
                        I learned to my second internship and was able to go above and beyond with my project. Both my teams were a 
                        fantastic help to me and have helped me to become both a better Software Engineer and a better person. 
                        <br />
                        <br />
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <img src={dark ? 'amazon_dark.png' : 'amazon_light.png'} alt='Amazon logo' style={imgStyle}/>
                </Grid>
            </Grid>
        </Stack>
    )
}