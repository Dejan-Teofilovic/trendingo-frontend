import { useParams } from 'react-router'
import { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import { grey } from '@mui/material/colors'
import parse from 'html-react-parser'
import { COLOR_PRIMARY, COLOR_WHITE, URL_TELEGRAM_ADMIN_1, URL_TELEGRAM_ADMIN_2 } from '../../utils/constants'
import { IMAGES, LISTING_SERVICES } from '../../utils/data'
import useOrders from '../../hooks/useOrders'
import DialogOrder from './DialogOrder'

export default function ListingService() {
  const { serviceName } = useParams()
  const theme = useTheme();
  const { cart } = useOrders()

  const serviceData = useMemo(() => {
    let service = LISTING_SERVICES.find(
      element => element.name === serviceName
    )
    return service
  }, [serviceName])

  const price = useMemo(() => {
    if (serviceData) {
      return serviceData.price
    }
  }, [serviceData])

  const imageUrl = useMemo(() => {
    if (serviceData) {
      let imageData = IMAGES.find(element => element.id === serviceData.imageId)
      return imageData?.value
    }
  }, [serviceData?.imageId])

  const disableOrder = useMemo(() => {
    if (!price) {
      return true
    }
    if (cart) {
      let orderExisted = cart.find(orderItem => orderItem.service_title === serviceData?.title)
      if (orderExisted) {
        return true
      }
    }
    return false
  }, [cart, price])

  const [dialogOpened, setDialogOpened] = useState(false)

  const handleClose = () => {
    setDialogOpened(false);
  };

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

              <Box mt={3}>
                <Typography
                  variant="body1"
                  textAlign="justify"
                  color={grey[400]}
                  fontWeight={700}
                >
                  Do you have any questions before ordering?
                </Typography>
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
                  Contact <Link target="_blank" href={URL_TELEGRAM_ADMIN_1}>@sagarnaik1</Link> or <Link target="_blank" href={URL_TELEGRAM_ADMIN_2}>@GibonDEXT</Link>
                </Typography>
              </Box>

              <Typography variant="h5" fontWeight={700} mt={5} color={COLOR_WHITE}>
                Price: <Typography component="span" variant="h4" fontWeight={900}>
                  ${price}
                </Typography>
              </Typography>

              <Button
                size="large"
                variant="contained"
                disabled={disableOrder}
                onClick={() => setDialogOpened(true)}
                sx={{ mt: 4, minWidth: 300, fontWeight: 900 }}
              >
                Order
              </Button>
            </Grid>
          </Grid>
        </Box>

      </Stack>
      {
        serviceData && price && (
          <DialogOrder
            isOpened={dialogOpened}
            handleClose={handleClose}
            orderData={{
              service_type: 'listing',
              service_title: serviceData.title,
              price
            }}
          />
        )
      }
    </Container>
  )
}