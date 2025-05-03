import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #7b1fa2, #512da8)' }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        )}
        <Button color="inherit" href="#hero">Home</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>

        {!isMobile && (
          <Button color="inherit" href="/cv.pdf" download>
            CV
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
