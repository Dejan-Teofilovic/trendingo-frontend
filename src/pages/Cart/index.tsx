import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  Grid,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  IconButton,
  Stack,
  TextField,
  Typography,
  Button
} from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import NoData from "../../components/NoData";
import useOrders from "../../hooks/useOrders";
import { useMemo, useState } from "react";
import DialogConnectWallet from "./DialogConnectWallet";
import useWallet from "../../hooks/useWallet";
import useAlertMessage from "../../hooks/useAlertMessage";
import { MESSAGE_CART_EMPTY, WARNING } from "../../utils/constants";

const validSchema = yup.object().shape({
  telegramUsername: yup.string().required('Please input your telegram username.'),
  alternativeTelegramUsername: yup.string().required('Please input your alternative telegram username.')
});

export default function Cart() {
  const { cart, removeOrderFromCart } = useOrders()
  const { currentAccount, currency, disconnectWallet } = useWallet()
  const { openAlert } = useAlertMessage()

  const [dialogOpened, setDialogOpened] = useState(false)

  const totalPrice = useMemo(() => {
    if (cart) {
      let _totalPrice = 0
      for (let i = 0; i < cart.length; i += 1) {
        _totalPrice += cart[i].price
      }
      return _totalPrice
    }
    return 0
  }, [cart?.length])

  const discountPercentage = useMemo(() => {
    if (totalPrice >= 4000) {
      return 0.2
    }
    return 0
  }, [totalPrice])

  const formik = useFormik({
    initialValues: {
      telegramUsername: '',
      alternativeTelegramUsername: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      if (!cart) {
        return openAlert({
          severity: WARNING,
          message: MESSAGE_CART_EMPTY
        })
      }
    }
  })

  const handleClose = () => {
    setDialogOpened(false);
  };

  const handleRemoveOrder = (index: number) => {
    removeOrderFromCart(index)
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Stack spacing={4}>
              <TableContainer component={Paper} elevation={12}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 900 }}>No</TableCell>
                      <TableCell sx={{ fontWeight: 900 }}>Service name</TableCell>
                      <TableCell sx={{ fontWeight: 900 }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: 900 }}>Action</TableCell>
                    </TableRow>
                  </TableHead>

                  {
                    cart && (
                      <TableBody>
                        {
                          cart.map((order, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{order.service_title}</TableCell>
                              <TableCell>${order.price}</TableCell>
                              <TableCell>
                                <IconButton onClick={() => handleRemoveOrder(index)}>
                                  <Icon icon="entypo:circle-with-cross" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    )
                  }
                </Table>
                {
                  (!cart || cart.length === 0) && (
                    <NoData text="No Data." />
                  )
                }
              </TableContainer>

              <Paper elevation={12}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} py={2}>
                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography variant="body1" component="span">Discount: </Typography>
                    <Typography variant="h5" component="span">
                      {discountPercentage * 100}%
                    </Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <Typography variant="body1" component="span">Total price: </Typography>
                    <Typography variant="h4" component="span" fontWeight={700}>
                      ${totalPrice - totalPrice * discountPercentage}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={12} sx={{ p: 3 }}>
              <Stack spacing={2}>
                <TextField
                  name="telegramUsername"
                  placeholder="@admin"
                  label="Telegram username"
                  value={formik.values.telegramUsername}
                  onChange={formik.handleChange}
                  error={formik.touched.telegramUsername && Boolean(formik.errors.telegramUsername)}
                  helperText={
                    formik.touched.telegramUsername && formik.errors.telegramUsername ? (
                      <Typography
                        component="span"
                        sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                      >
                        <Icon icon="bxs:error-alt" />&nbsp;
                        {formik.touched.telegramUsername && formik.errors.telegramUsername}
                      </Typography>
                    ) : (<></>)
                  }
                />

                <TextField
                  name="alternativeTelegramUsername"
                  placeholder="@admin"
                  label="Alternative telegram username"
                  value={formik.values.alternativeTelegramUsername}
                  onChange={formik.handleChange}
                  error={formik.touched.alternativeTelegramUsername && Boolean(formik.errors.alternativeTelegramUsername)}
                  helperText={
                    formik.touched.alternativeTelegramUsername && formik.errors.alternativeTelegramUsername ? (
                      <Typography
                        component="span"
                        sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                      >
                        <Icon icon="bxs:error-alt" />&nbsp;
                        {formik.touched.alternativeTelegramUsername && formik.errors.alternativeTelegramUsername}
                      </Typography>
                    ) : (<></>)
                  }
                />

                {
                  currentAccount ? (
                    <>
                      <Stack direction="row" alignItems="center">
                        <Typography component="span" variant="body1" fontWeight={700}>
                          Currency:&nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <Box
                            component="img"
                            src={`assets/images/${currency.toLowerCase()}.png`}
                            width={20}
                          />

                          <Typography component="span" variant="body1">
                            {currency}
                          </Typography>
                        </Stack>
                      </Stack>

                      <Stack direction="row" alignItems="center">
                        <Typography component="span" variant="body1" fontWeight={700}>
                          Wallet address:&nbsp;&nbsp;&nbsp;
                        </Typography>

                        <Typography component="span" variant="body1">
                          {currentAccount.slice(0, 15)}...{currentAccount.slice(-5)}
                        </Typography>
                      </Stack>

                      <Button variant="outlined" onClick={() => disconnectWallet()}>
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button variant="outlined" onClick={() => setDialogOpened(true)}>
                      Connect wallet
                    </Button>
                  )
                }
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row" justifyContent="end" mt={4}>
        <Button variant="contained" onClick={() => formik?.handleSubmit()}>
          Pay now
        </Button>
      </Stack>
      <DialogConnectWallet isOpened={dialogOpened} handleClose={handleClose} />
    </Container >
  )
}