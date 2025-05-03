import React, { useEffect } from 'react';
import { Box, Typography, Button, TextField, Container, Grid, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" style={{ padding: '6rem 2rem', backgroundColor: '#ede7f6' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom data-aos="fade-up">
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph data-aos="fade-up">
          I’m open to freelance opportunities, internships, or backend developer roles. Let's connect!
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* Contact Form */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <form>
              <TextField label="Name" variant="outlined" fullWidth margin="normal" data-aos="fade-up" />
              <TextField label="Email" variant="outlined" fullWidth margin="normal" data-aos="fade-up" />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                data-aos="fade-up"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2, borderRadius: 3 }}
                data-aos="fade-up"
              >
                Send Message
              </Button>
            </form>
          </Grid>

          {/* Contact Info & Social Media */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography>Email: rohitvvihwakarma400@gmail.com</Typography>
            <Typography>Location: Kandivali, Mumbai</Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Follow Me
              </Typography>
              <Box>
                <IconButton
                  component="a"
                  href="https://github.com/Rohitvish04"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' },
                    marginRight: 2,
                  }}
                >
                  <FaGithub size={28} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/rohitvvishwakarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' },
                    marginRight: 2,
                  }}
                >
                  <FaLinkedin size={28} color="#0077b5" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' },
                    marginRight: 2,
                  }}
                >
                  <FaTwitter size={28} color="#1da1f2" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' },
                    marginRight: 2,
                  }}
                >
                  <FaFacebook size={28} color="#4267B2" />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:rohitvvihwakarma400@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' },
                  }}
                >
                  <FaEnvelope size={28} color="#D44638" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
