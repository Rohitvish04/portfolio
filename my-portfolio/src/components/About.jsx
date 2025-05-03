import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => (
  <section id="about" style={{ padding: '6rem 2rem', backgroundColor: '#f3e5f5' }}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am a passionate backend developer with experience in building scalable and performant systems.
        I love working with technologies like Node.js, Express.js, and PostgreSQL.
      </Typography>
      <Typography variant="body1" paragraph>
        I am constantly learning and growing my skills, aiming to make an impact with the projects I build.
      </Typography>
    </Container>
  </section>
);

export default About;
