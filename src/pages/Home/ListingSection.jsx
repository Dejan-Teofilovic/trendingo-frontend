import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Link,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Icon as MuiIcon,
  IconButton
} from '@mui/material';
import { Icon } from '@iconify/react';
import {
  COLOR_PRIMARY,
} from '../../utils/constants';
import { FilterTextField } from '../../components/styledComponents';
import MHidden from '../../components/MHidden';

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

        <TableContainer
          component={Paper}
          elevation={24}
          sx={{ mt: 4, p: { xs: 0, md: 2 } }}
        >
          <Table>
            <TableHead sx={{ textTransform: 'uppercase' }}>
              <TableRow>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Platform
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Listing Time
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Pricing
                </TableCell>
                <TableCell sx={{ color: COLOR_PRIMARY, fontWeight: 900 }} variant="head">
                  Shop
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                DATA.map(dataItem => (
                  <TableRow key={dataItem.platform}>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.platform}
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.listingTime}
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.pricing}
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      <MHidden width="smDown">
                        <Button
                          variant="contained"
                          component={Link}
                          href={dataItem.shop}
                          target="_blank"
                        >
                          Order Now
                        </Button>
                      </MHidden>
                      <MHidden width="smUp">
                        <IconButton
                          component={Link}
                          href={dataItem.shop}
                          target="_blank"
                          sx={{ color: COLOR_PRIMARY }}
                        >
                          <MuiIcon>
                            <Icon icon="icon-park-outline:transaction-order" />
                          </MuiIcon>
                        </IconButton>
                      </MHidden>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}