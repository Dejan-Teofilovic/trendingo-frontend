import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box py={3}>
      <Typography textAlign="center">
        © {new Date().getFullYear()} Neurality Project LTD
      </Typography>
    </Box>
  );
}