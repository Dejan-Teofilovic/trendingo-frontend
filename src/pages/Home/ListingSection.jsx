import React, { useState } from 'react';
import { Box, Container, MenuItem, Paper, Stack, Typography } from '@mui/material';
import { COLOR_GRAY_BRIGHT, COLOR_PRIMARY } from '../../utils/constants';
import { FilterTextField } from '../../components/styledComponents';

export default function ListingSection({ sx }) {
  const [period, setPeriod] = useState('');
  return (
    <Box sx={{ ...sx }}>
      <Container maxWidth="xl">
        <Box position="relative">
          <Typography
            variant="h4"
            fontWeight={700}
            color={COLOR_PRIMARY}
            textAlign="center"
          >
            Listing
          </Typography>
          <FilterTextField
            label="Period"
            name="period"
            select
            sx={{ position: 'absolute', bottom: 0, right: 0, width: 100 }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <MenuItem value="1">1 day</MenuItem>
            <MenuItem value="3">3 days</MenuItem>
            <MenuItem value="5">5 days</MenuItem>
          </FilterTextField>
        </Box>


        <Paper elevation={24} sx={{ width: '100%', mt: 4 }}>
          <Stack direction="row" py={2} px={4} spacing={6} alignItems="center">
            <Box width="40%">
              <Typography
                variant="body1"
                color={COLOR_PRIMARY}
                textTransform="uppercase"
                fontWeight={700}
              >
                Platform
              </Typography>
            </Box>
            <Box width="10%">
              <Typography
                variant="body1"
                color={COLOR_PRIMARY}
                textTransform="uppercase"
                fontWeight={700}
              >
                Listing Time
              </Typography>
            </Box>
            <Box width="25%">
              <Typography
                variant="body1"
                color={COLOR_PRIMARY}
                textTransform="uppercase"
                fontWeight={700}
              >
                Pricing
              </Typography>
            </Box>
            <Box width="15%">
              <Typography
                variant="body1"
                color={COLOR_PRIMARY}
                textTransform="uppercase"
                fontWeight={700}
              >
                Shop
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}