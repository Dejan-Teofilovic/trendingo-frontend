import { useParams } from 'react-router'
import { useMemo } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import { grey } from '@mui/material/colors'
import parse from 'html-react-parser'
import { COLOR_PRIMARY } from '../../utils/constants'
import { IMAGES, LISTING_SERVICES } from '../../utils/data'

export default function ListingService() {
  const { serviceName } = useParams()
  const theme = useTheme();

  const serviceData = useMemo(() => {
    let service = LISTING_SERVICES.find(
      element => element.name === serviceName
    )
    return service
  }, [serviceName])

  const imageUrl = useMemo(() => {
    if (serviceData) {
      let imageData = IMAGES.find(element => element.id === serviceData.imageId)
      return imageData?.value
    }
  }, [serviceData?.imageId])

  return (
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 6, md: 12 }}>
        <Box>
          <Grid container spacing={{ xs: 6, md: 0 }}>
            {/* Image */}
            <Grid item xs={12} sm={6}>
              <Stack direction="row" justifyContent={{ xs: "center", md: 'start' }}>
                {
                  imageUrl && (
                    <Paper
                      component="img"
                      src={imageUrl}
                      alt=""
                      elevation={24}
                      sx={{ width: { xs: '90%', sm: '70%', md: '80%' } }}
                    />
                  )
                }

              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              {/* Title */}
              <Typography
                color={COLOR_PRIMARY}
                variant="h4"
                fontWeight={800}
                textAlign={{ xs: 'center', sm: 'left' }}
              >
                {serviceData?.title}
              </Typography>

              {/* Decription */}
              {
                serviceData?.description && (
                  <Box mt={3}>
                    <Typography
                      variant="body1"
                      textAlign="justify"
                      color={grey[400]}
                      sx={{
                        '& a': {
                          textDecoration: 'none',
                          color: theme.palette.primary.main
                        }
                      }}
                      lineHeight={2}
                    >
                      {parse(serviceData.description)}
                    </Typography>
                  </Box>
                )
              }
            </Grid>
          </Grid>
        </Box>

        <Stack
          direction="row"
          justifyContent="end"
          width="100%"
        >
          <Button variant="contained">
            Order
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}