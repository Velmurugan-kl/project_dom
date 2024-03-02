// LoadingOverlay.js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingOverlay = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '99vw',
        height: '100vh',
        backdropFilter:'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure overlay is above other content
      }}
    >
      <CircularProgress size={80} sx={{color:'white'}} />
    </Box>
  );
};

export default LoadingOverlay;
