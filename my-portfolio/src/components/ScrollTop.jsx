import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <Fab
      color="secondary"
      size="medium"
      onClick={scrollToTop}
      sx={{ position: 'fixed', bottom: 24, right: 24 }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  ) : null;
};

export default ScrollTop;
