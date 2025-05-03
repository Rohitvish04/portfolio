import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
// import React, { useEffect } from 'react'; // ✅ Correct
import 'aos/dist/aos.css';
import AOS from 'aos';

 

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#fdf6ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
});

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </ThemeProvider>
  );
}

export default App;
