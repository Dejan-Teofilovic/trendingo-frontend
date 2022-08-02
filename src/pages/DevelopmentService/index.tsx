import { useParams } from 'react-router'
import { Fragment, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material'
import { grey } from '@mui/material/colors'
import parse from 'html-react-parser'
import { COLOR_PRIMARY, URL_TELEGRAM_ADMIN_1, URL_TELEGRAM_ADMIN_2 } from '../../utils/constants'
import { DEVELOPMENT_SERVICES, IMAGES, SELECTS } from '../../utils/data'
import useOrders from '../../hooks/useOrders'
import DialogOrder from './DialogOrder'

export default function DevelopmentService() {
  const { serviceName } = useParams()
  const theme = useTheme();
  const { cart } = useOrders()

  const [devPart, setDevPart] = useState('all')
  const [dialogOpened, setDialogOpened] = useState(false)

  const serviceData = useMemo(() => {
    let service = DEVELOPMENT_SERVICES.find(
      element => element.name === serviceName
    )
    return service
  }, [serviceName])

  const price = useMemo(() => {
    if (serviceData) {
      if (serviceData.price) {
        return serviceData.price
      } else {
        let priceData = null
        if (devPart) {
          priceData = serviceData?.prices?.find(priceItem => priceItem.devPart === devPart)
          return priceData?.price
        }
      }
    }
  }, [serviceData, devPart])

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


  const handleClose = () => {
    setDialogOpened(false);
  };

  const handleChangeSelect = (value: string) => {
    setDevPart(value)
  }

  return (
    <Box>
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
              </Grid>
            </Grid>
          </Box>

          {
            serviceData?.selectIds ? (
              <Card sx={{ p: 3 }}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={4}>
                    {
                      serviceData.selectIds.map(id => {
                        let selectData = SELECTS.find(element => element.id === id);
                        if (selectData) {
                          return (
                            <TextField
                              select
                              name="chain"
                              label={selectData.label}
                              sx={{ width: '25ch' }}
                              key={id}
                              onChange={(e) => handleChangeSelect(e?.target?.value)}
                            >
                              {
                                selectData.options.map(optionItem => (
                                  <MenuItem value={optionItem.value} key={optionItem.value}>
                                    {optionItem.label}
                                  </MenuItem>
                                ))
                              }
                            </TextField>
                          )
                        }
                        return <Fragment key={id} />
                      })
                    }
                  </Stack>

                  {
                    price && (
                      <Typography variant="h5" color="white">
                        {price} $
                      </Typography>
                    )
                  }

                  <Button variant="contained" onClick={() => setDialogOpened(true)} disabled={disableOrder}>
                    Order
                  </Button>
                </Stack>
              </Card>
            ) : (
              <Stack
                direction="row"
                justifyContent="end"
                width="100%"
              >
                <Button variant="contained" disabled={disableOrder} onClick={() => setDialogOpened(true)}>
                  Order
                </Button>
              </Stack>
            )
          }
        </Stack>
      </Container>
      {
        serviceData && price && (
          <DialogOrder
            isOpened={dialogOpened}
            handleClose={handleClose}
            orderData={devPart ? {
              service_type: 'development',
              service_title: serviceData.title,
              dev_part: devPart,
              price
            } : {
              service_type: 'development',
              service_title: serviceData.title,
              price
            }}
          />
        )
      }
    </Box>
  )
}