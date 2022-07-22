import { useParams } from 'react-router';
import { useMemo } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../utils/constants';
import { IMAGES, LISTING_SERVICES } from '../../utils/data';

export default function ListingService() {
  const { serviceName } = useParams();

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
    <Box my={{ xs: 5, md: 10 }}>
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

                {/* Price */}
                {
                  serviceData?.pricing && (
                    <Typography
                      variant="h6"
                      textAlign={{ xs: 'center', sm: 'left' }}
                      color={COLOR_WHITE}
                    >
                      {serviceData.pricing}$
                    </Typography>
                  )
                }

                {/* Decription */}
                <Box mt={3}>
                  {
                    serviceData?.descriptions.map(description => (
                      <Typography
                        variant="body1"
                        textAlign="justify"
                        color={grey[400]}
                        key={description}
                      >
                        {description}
                      </Typography>
                    ))
                  }
                </Box>

                {/* Benefits */}
                {
                  serviceData?.benefits && (
                    <Box mt={3}>
                      <Typography
                        variant="body1"
                        textAlign="justify"
                        color={grey[400]}
                        fontWeight={800}
                      >
                        Benefits:
                      </Typography>
                      {
                        serviceData.benefits.map((benefit, index) => (
                          <Typography
                            variant="body1"
                            textAlign="justify"
                            color={grey[400]}
                            key={benefit}
                          >
                            {index + 1}.{benefit}
                          </Typography>
                        ))
                      }
                    </Box>
                  )
                }
              </Grid>
            </Grid>
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={4}>
              {
                serviceData?.timeFrame && (
                  <Typography variant="h6" color="white">
                    {serviceData?.timeFrame}
                  </Typography>
                )
              }
            </Stack>
            <Typography variant="h5" color="white">
              {serviceData?.pricing} $
            </Typography>
            <Button variant="contained">
              Order
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box >
  )
}