import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  Stack,
  CardMedia
} from "@mui/material"
import { Fragment } from "react"
import { useNavigate } from "react-router"
import { routes } from "../../Routes/routes"
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants"

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ md: 12, xs: 6 }}>
        <Stack spacing={1}>
          <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
            Leading Marketing Services In The Crypto Industry
          </Typography>
          <Typography textAlign="center" variant="h6" color={COLOR_WHITE}>
            All-in-one crypto services with the most effective marketing solution from the marketplace.
          </Typography>
        </Stack>

        <Box>
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {
              routes.map(routeItem => {
                if (routeItem.name && routeItem.name !== 'Home') {
                  return (
                    <Grid item xs={6} sm={4} md={3} key={routeItem.path}>
                      <Card sx={{ height: '100%' }}>
                        <CardActionArea onClick={() => navigate(routeItem.path)}>
                          <CardMedia
                            component="img"
                            src={routeItem.image}
                            alt={routeItem.name}
                          />
                          <CardContent>
                            <Typography variant="h5" textAlign="center">
                              {routeItem.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
                return <Fragment key={routeItem.path} />
              })
            }
          </Grid>
        </Box>
      </Stack>
    </Container>
  )
}