import { useState } from 'react';
import { Fab } from '@mui/material';
import { Icon } from '@iconify/react';

export default function ScrollFab() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Fab
      size="small"
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 100,
        display: visible ? 'flex' : 'none'
      }}
      onClick={scrollToTop}
    >
      <Icon icon="bxs:up-arrow" />
    </Fab>
  );
}