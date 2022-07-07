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
  IconButton,
  Stack,
  Avatar
} from '@mui/material';
import { Icon } from '@iconify/react';
import Flag from 'react-world-flags';
import {
  COLOR_PRIMARY, FONT_SIZE_H3_MD, FONT_SIZE_H4_MD,
} from '../../utils/constants';
import { FilterTextField } from '../../components/styledComponents';
import MHidden from '../../components/MHidden';
import { thoursandsSeparators } from '../../utils/functions';

const DATA = [
  {
    platform: 'coinsniper.net',
    logo: 'coinsniper.webp',
    trafficIndex: 6959,
    mainAudience: {
      country: 'in',
      percentage: 18.7
    },
    pricing: '9 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'watcher.guru',
    logo: 'watcher.png',
    trafficIndex: 16423,
    mainAudience: {
      country: 'us',
      percentage: 56.6
    },
    pricing: '9 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinhunt.cc',
    logo: 'coinhunt.webp',
    trafficIndex: 20720,
    mainAudience: {
      country: 'in',
      percentage: 29.9
    },
    pricing: '9 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinalpha.app',
    logo: 'coinalpha.jpg',
    trafficIndex: 10723,
    mainAudience: {
      country: 'jp',
      percentage: 80.4
    },
    pricing: '9 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinvote.cc',
    logo: 'coinvote.png',
    trafficIndex: 38835,
    mainAudience: {
      country: 'ar',
      percentage: 15.7
    },
    pricing: '9 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinmooner.com',
    logo: 'coinmooner.png',
    trafficIndex: 30239,
    mainAudience: {
      country: 'us',
      percentage: 19.6
    },
    pricing: '8 BUSD',
    shop: 'https://t.me/upvote.cc'
  },
  {
    platform: 'coinscope.co',
    logo: 'coinscope.jpg',
    trafficIndex: 65070,
    mainAudience: {
      country: 'in',
      percentage: 23.5
    },
    pricing: '8 BUSD',
    shop: 'https://t.me/upvote.cc'
  }
];

export default function UpvoteSection({ sx }) {
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
            Upvote
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
                  Traffic Index
                </TableCell>
                <TableCell
                  sx={{
                    color: COLOR_PRIMARY,
                    fontWeight: 900,
                    display: { xs: 'none', sm: 'table-cell' }
                  }}
                  variant="head"
                >
                  Main Audience
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
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          src={`assets/images/${dataItem.logo}`}
                          alt=""
                        />
                        <Typography component="span" sx={{ display: { xs: 'none', md: 'block' } }}>
                          {dataItem.platform}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      {dataItem.trafficIndex && thoursandsSeparators(dataItem.trafficIndex)}
                    </TableCell>
                    <TableCell
                      sx={{
                        overflow: 'auto',
                        display: { xs: 'none', sm: 'table-cell' }
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Flag
                          code={dataItem.mainAudience.country}
                          height={16}
                          fallback={<span>Unknown</span>}
                        />
                        <Typography variant="body2" component="span">
                          ({dataItem.mainAudience.percentage}%)
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ maxWidth: { xs: 60, md: 'none' }, overflow: 'auto' }}>
                      Starting from {dataItem.pricing}
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

        <Stack mt={3} direction="row" justifyContent="center">
          <Button variant="contained" sx={{ fontSize: FONT_SIZE_H3_MD }}>
            Request new service
          </Button>
        </Stack>
      </Container>
    </Box >
  );
}