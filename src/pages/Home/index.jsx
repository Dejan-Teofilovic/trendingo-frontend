import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import ListingSection from './ListingSection';
import TrendingSection from './TrendingSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ListingSection sx={{ mt: 10 }} />
      <TrendingSection sx={{ mt: 10 }} />
    </Box>
  );
}