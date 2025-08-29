import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { Box } from '@mui/system';

const projects = [
  {
    title: 'Blog Website',
    description: 'Responsive blog site with user login, create & edit posts.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=3418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Rohitvish04/Blogs_API',
    live: 'https://blogs-api-ncn3.onrender.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern personal portfolio showcasing skills & projects.',
    tech: ['React', 'Material UI', 'Vite'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://blogs-api-ncn3.onrender.com',
  },
  {
    title: 'News App',
    description: 'Real-time weather forecast using OpenWeatherMap API.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1562263515-a465789e0eaa?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Rohitvish04/news',
    live: 'https://news-smoky-eight.vercel.app',
  },
  {
    title: 'Task Manager',
    description: 'Manage tasks with login, create, update and delete features.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://yourtaskmanager.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ background: '#f2f4f8', padding: '60px 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Projects
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          Real applications built using full-stack technologies.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                sx={{
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                    {project.tech.map((tech, idx) => (
                      <Chip key={idx} label={tech} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
