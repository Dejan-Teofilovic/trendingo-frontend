import { Box, Button, Container, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material';
// import { useParams } from 'react-router';

export default function Service() {
  // const { serviceType, siteName } = useParams();

  return (
    <Box my={{ xs: 5, md: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 12 }}>
          <Box>
            <Grid container spacing={{ xs: 6, md: 0 }}>
              <Grid item xs={12} sm={6}>
                <Stack direction="row" justifyContent={{ xs: "center", md: 'start' }}>
                  <Paper
                    component="img"
                    src="/assets/images/certik.webp"
                    alt=""
                    elevation={24}
                    sx={{ width: { xs: '90%', sm: '70%', md: '80%' } }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" fontWeight={800} textAlign={{ xs: 'center', sm: 'left' }}>
                  Certik Trending
                </Typography>
                <Typography variant="h6" textAlign={{ xs: 'center', sm: 'left' }}>
                  900.00 BUSD
                </Typography>
                <Typography variant="body1" mt={3} textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={4}>
              <TextField
                select
                name="chain"
                label="Chain"
                sx={{ width: '25ch' }}
              >
                <MenuItem value="ethereum">Ethereum</MenuItem>
                <MenuItem value="bsc">BSC</MenuItem>
                <MenuItem value="polygon">Polygon</MenuItem>
              </TextField>

              <TextField
                select
                name="duration"
                label="Duration"
                sx={{ width: '25ch' }}
              >
                <MenuItem value="1">1 day</MenuItem>
                <MenuItem value="3">3 days</MenuItem>
                <MenuItem value="5">5 days</MenuItem>
              </TextField>
            </Stack>
            <Button variant="contained">
              Order
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}