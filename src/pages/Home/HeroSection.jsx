import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import {
  COLOR_SECONDARY_BRIGHT,
  COLOR_WHITE,
  COLOR_PRIMARY,
  FONT_FAMILY_SECONDARY,
  COLOR_GRAY_BRIGHT,
  COLOR_GRAY
} from '../../utils/constants';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: COLOR_SECONDARY_BRIGHT,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ py: 5 }}
      >
        <Grid container alignItems="center" spacing={{ md: 12 }}>
          <Grid item xs={12} md={7}>
            <Typography
              textAlign={{ xs: 'center', md: 'left' }}
              textTransform="capitalize"
              variant="h3"
              color={COLOR_WHITE}
              fontWeight={600}
              lineHeight={1.5}
            >
              The leading&nbsp;
              <Typography
                component="span"
                variant="inherit"
                color={COLOR_PRIMARY}
                fontWeight="inherit"
              >
                Upvoting
              </Typography>
              <br /> services in the crypto industry
            </Typography>

            <Typography
              variant="h5"
              fontFamily={FONT_FAMILY_SECONDARY}
              color={COLOR_GRAY}
              mt={4}
              lineHeight={1.7}
            >
              Rank your token in Trending with the most effective marketing solution from the marketplace.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box width="100%">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_yvmyimd3.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '100%' }}
                loop

                autoplay
              ></lottie-player>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}