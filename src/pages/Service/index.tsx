import { Box, Container, Grid, Typography } from '@mui/material';
// import { useParams } from 'react-router';

export default function Service() {
  // const { serviceType, siteName } = useParams();

  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/certik.webp"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={800}>Certik Trending</Typography>
            <Typography variant="h6">900.00 BUSD</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}