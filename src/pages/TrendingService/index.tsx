import { useParams } from 'react-router';
import { Fragment, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Flag from 'react-world-flags';
import { COLOR_PRIMARY } from '../../utils/constants';
import { IMAGES, PRICES, SELECTS, TRENDING_SERVICES } from '../../utils/data';

export default function TrendingService() {
  const { serviceName } = useParams();
  const [trendingType, setTrendingType] = useState('');
  const [period, setPeriod] = useState(0);
  const [region, setRegion] = useState('');

  const serviceData = useMemo(() => {
    let service = TRENDING_SERVICES.find(
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

  const regionSelect = useMemo(() => {
    if (trendingType === 'region') {
      return SELECTS.find(element => element.id === 4);
    }
  }, [trendingType])

  const price = useMemo(() => {
    if (period && trendingType) {
      let priceData = PRICES.find(priceItem => priceItem.trendingTypeValue === trendingType && priceItem.optionValue === period)

      if (priceData) {
        return priceData.value
      }
    }
  }, [period, trendingType])

  const handleChangeSelect = (selectId: number, value: string) => {
    if (selectId === 1) {
      setTrendingType(value);
    } else if (selectId === 2 || selectId === 3) {
      setPeriod(Number(value));
    } else if (selectId === 4) {
      setRegion(value);
    }
  }

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
              {
                regionSelect && (
                  <TextField
                    select
                    name="chain"
                    label={regionSelect.label}
                    sx={{
                      width: '28ch',
                      '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                      }
                    }}
                    onChange={(e) => handleChangeSelect(regionSelect.id, e?.target?.value)}
                  >
                    {
                      regionSelect.options.map(optionItem => (
                        <MenuItem value={optionItem.value} key={optionItem.value}>
                          {
                            typeof optionItem.value === 'string' && (
                              <ListItemIcon sx={{ width: 40, mr: 2, height: 20 }}>
                                <Flag code={optionItem.value} />
                              </ListItemIcon>
                            )
                          }
                          <ListItemText>
                            {optionItem.label}
                          </ListItemText>
                        </MenuItem>
                      ))
                    }
                  </TextField>
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

            <Button variant="contained">
              Order
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box >
  )
}