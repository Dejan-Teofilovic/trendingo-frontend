import { useParams } from 'react-router'
import { Fragment, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material'
import { grey } from '@mui/material/colors'
import parse from 'html-react-parser'
import { COLOR_PRIMARY } from '../../utils/constants'
import { IMAGES, SELECTS, UPVOTING_SERVICES } from '../../utils/data'
import useOrders from '../../hooks/useOrders'
import DialogOrder from './DialogOrder'

export default function UpvotingService() {
  const { serviceName } = useParams()
  const theme = useTheme()
  const { cart } = useOrders()

  const [amount, setAmount] = useState(0)
  const [dialogOpened, setDialogOpened] = useState(false)

  const serviceData = useMemo(() => {
    let service = UPVOTING_SERVICES.find(
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

  const price = useMemo(() => {
    if (serviceData) {
      if (amount) {
        let priceData = serviceData.prices.find(priceItem => priceItem.amount === amount)

        if (priceData) {
          return priceData.price
        }
      }
    }
  }, [amount])

  const disableOrder = useMemo(() => {
    if (!price) {
      return true
    }
    if (cart) {
      let orderExisted = cart.find(orderItem => orderItem.serviceTitle === serviceData?.title)
      if (orderExisted) {
        return true
      }
    }
    return false
  }, [cart, price])

  const handleChangeSelect = (selectId: number, value: string) => {
    if (selectId === 8) {
      setAmount(Number(value))
    }
  }

  const handleClose = () => {
    setDialogOpened(false);
  };

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
              </Grid>
            </Grid>
          </Box>

          <Card sx={{ p: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={4}>
                {
                  serviceData?.selectIds && (
                    <>
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
                                onChange={(e) => handleChangeSelect(id, e?.target?.value)}
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
                    </>
                  )
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
        </Stack>
      </Container>
      {
        serviceData && price && (
          <DialogOrder isOpened={dialogOpened} handleClose={handleClose} price={price} serviceData={serviceData} />
        )
      }
    </Box >
  )
}