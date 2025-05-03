import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #6a1b9a, #8e24aa)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
              mb: 2,
            }}
          >
            Hello, I'm Rohit Vishwakarma
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Backend Developer | Node.js | PostgreSQL
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            I build fast, scalable backend systems.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            useFlexGap
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              color="secondary"
              href="/Myresume.pdf"
              download
              sx={{ borderRadius: '30px', px: 4 }}
            >
              📄 Download CV
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#projects"
              sx={{
                borderRadius: '30px',
                px: 4,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              🚀 View Projects
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#contact"
              sx={{
                borderRadius: '30px',
                px: 4,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              🤝 Hire Me
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
