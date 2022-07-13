import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router';

export default function Service() {
  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box

            />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}