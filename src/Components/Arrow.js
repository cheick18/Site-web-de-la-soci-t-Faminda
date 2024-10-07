import React from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ArrowComponent = () => {
  return (
    <IconButton
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        backgroundColor: '#359AF2',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpwardIcon color='white' sx={{color:'white'}} />
    </IconButton>
  );
};

export default ArrowComponent;
