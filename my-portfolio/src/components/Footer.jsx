import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 4, backgroundColor: '#673ab7', color: '#fff' }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Rohit Vishwakarma. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
