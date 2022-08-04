import { Icon } from "@iconify/react"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  Stack,
  CardMedia,
  Link,
  Button
} from "@mui/material"
import { Fragment } from "react"
import { useNavigate } from "react-router"
import { routes } from "../../Routes/routes"
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants"

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Stack spacing={6}>
        <Stack spacing={1}>
          <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
            Trendingo Keeps you on Trend
          </Typography>
          <Typography textAlign="center" variant="h6" color={COLOR_WHITE}>
            All-in-one crypto services with the most effective marketing solution from the marketplace.
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center">
          <Box
            component="div"
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="62dab4e724137f4533e59d0b"
            data-style-height="24px"
            data-style-width="100%"
            data-theme="dark"
            data-without-reviews-preferred-string-id="1"
          >
            <Button
              component={Link}
              href="https://www.trustpilot.com/review/trendingo.cc"
              target="_blank"
              rel="noopener"
              variant="outlined"
              startIcon={<Icon icon="simple-icons:trustpilot" />}
              endIcon={<Icon icon="simple-icons:trustpilot" />}
            >
              Trustpilot
            </Button>
          </Box>
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