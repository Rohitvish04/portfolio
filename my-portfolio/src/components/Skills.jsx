import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiPython, SiMysql, SiReact, SiNodedotjs, SiPostgresql, SiExpress, SiDjango, SiGit } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" /> },
  { name: 'HTML', icon: <SiHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <SiCss3 color="#2965f1" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
  { name: 'MySQL', icon: <SiMysql color="#00758F" /> },
  { name: 'React', icon: <SiReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#68A063" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },  // Added Django
  { name: 'Git', icon: <SiGit color="#F05032" /> },  // Added Git
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: '#fff', padding: '60px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Skills
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          Tools & technologies I work with
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Stack direction="column" alignItems="center" spacing={1}>
                  <Box sx={{ fontSize: 40 }}>{skill.icon}</Box>
                  <Typography variant="subtitle1">{skill.name}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Skills;
