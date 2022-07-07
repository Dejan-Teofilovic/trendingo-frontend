import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Link,
  MenuItem,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import {
  COLOR_BLACK,
  COLOR_GRAY_BRIGHT,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  FONT_FAMILY_SECONDARY
} from '../../utils/constants';
import { FilterTextField } from '../../components/styledComponents';

const DATA = [
  {
    platform: 'coinmarketcap.com',
    listingTime: '12 - 24 H',
    pricing: '10,000 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coingecko.com',
    listingTime: '24 - 48 H',
    pricing: '4,000 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinmarketcap.com',
    listingTime: '12 - 24 H',
    pricing: '1,500 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
];

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

        <Paper elevation={24} sx={{ width: '100%', mt: 4, py: 4 }}>
          {/* Table Head */}
          <Stack direction="row" pb={2} px={8} spacing={6} alignItems="center">
            <Box width="35%">
              <Typography
                variant="body1"
                color={COLOR_PRIMARY}
                textTransform="uppercase"
                fontWeight={700}
              >
                Platform
              </Typography>
            </Box>
            <Box width="15%">
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

          {/* Table body */}
          <Stack spacing={2} px={4}>
            {
              DATA.map(dataItem => (
                <Stack
                  direction="row"
                  px={4}
                  py={1}
                  spacing={6}
                  alignItems="center"
                  bgcolor={COLOR_GRAY_BRIGHT}
                  borderRadius={2}
                  key={dataItem.platform}
                >
                  <Box width="35%">
                    <Typography
                      variant="h6"
                      color={COLOR_BLACK}
                      fontFamily={FONT_FAMILY_SECONDARY}
                    >{dataItem.platform}</Typography>
                  </Box>
                  <Box width="15%">
                    <Typography
                      variant="h6"
                      color={COLOR_BLACK}
                      fontFamily={FONT_FAMILY_SECONDARY}
                    >{dataItem.listingTime}</Typography>
                  </Box>
                  <Box width="25%">
                    <Typography
                      variant="h6"
                      color={COLOR_SUCCESS}
                      fontFamily={FONT_FAMILY_SECONDARY}
                      fontWeight={700}
                    >{dataItem.pricing}</Typography>
                  </Box>
                  <Box width="15%">
                    <Button
                      variant="contained"
                      component={Link}
                      href={dataItem.shop}
                      target="_blank"
                    >
                      Order Now
                    </Button>
                  </Box>
                </Stack>
              ))
            }
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}