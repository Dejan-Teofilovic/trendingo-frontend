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
import { useEffect, useMemo, useState } from "react";
import DialogConnectWallet from "./DialogConnectWallet";
import useWallet from "../../hooks/useWallet";
import useAlertMessage from "../../hooks/useAlertMessage";
import {
  ADMIN_BSC_WALLET_ADDRESS,
  ADMIN_ETH_WALLET_ADDRESS,
  API_ID_OF_BNB,
  API_ID_OF_BUSD,
  API_ID_OF_ETHEREUM,
  API_PARAMETERS,
  API_TO_GET_PRICE_OF_TOKEN,
  DISCOUNT_PERCENTAGE_FOR_PRICE,
  MESSAGE_CART_EMPTY,
  MESSAGE_NOT_ENOUGH_BALANCE,
  MESSAGE_TX_FAILED,
  WARNING
} from "../../utils/constants";
import useLoading from "../../hooks/useLoading";
import { BigNumber, ethers } from "ethers";
import Web3 from "web3";
import { IError } from "../../utils/interfaces";
import useUser from "../../hooks/useUser";

const validSchema = yup.object().shape({
  telegramUsername: yup.string().required('Please input your telegram username.'),
  alternativeTelegramUsername: yup.string().required('Please input your alternative telegram username.')
});

export default function Cart() {
  const { cart, removeOrderItemFromCart, addNewOrder } = useOrders()
  const { currentAccount, currency, disconnectWallet, contract, provider, signer } = useWallet()
  const { userId, defaultDiscountPercentage, checkWhetherInfluencer } = useUser()
  const { openAlert } = useAlertMessage()
  const { openLoading, closeLoading } = useLoading()

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
    let percentage = defaultDiscountPercentage;
    if (totalPrice >= 4000) {
      percentage += DISCOUNT_PERCENTAGE_FOR_PRICE
    }
    return percentage
  }, [totalPrice, defaultDiscountPercentage])

  const formik = useFormik({
    initialValues: {
      telegramUsername: '',
      alternativeTelegramUsername: ''
    },
    validationSchema: validSchema,
    onSubmit: async (values) => {
      if (!cart) {
        return openAlert({
          severity: WARNING,
          message: MESSAGE_CART_EMPTY
        })
      }
      let transaction = null
      openLoading()
      if (currency === 'BUSD' && contract) {
        let { market_data: { current_price: { usd } } } = await (await fetch(`${API_TO_GET_PRICE_OF_TOKEN}${API_ID_OF_BUSD}${API_PARAMETERS}`)).json()

        try {
          transaction = await contract.transfer(
            ADMIN_BSC_WALLET_ADDRESS,
            BigNumber.from(ethers.utils.parseEther(
              String((totalPrice - totalPrice * discountPercentage) / Number(usd))
            )),
            { from: currentAccount }
          );
          await transaction.wait()
        } catch (error: IError | any) {
          if (error.code === -32603) {
            return openAlert({
              severity: WARNING,
              message: MESSAGE_NOT_ENOUGH_BALANCE
            })
          }
          return openAlert({
            severity: WARNING,
            message: MESSAGE_TX_FAILED
          })
        }
      } else {
        if (provider) {
          let { market_data: { current_price: { usd } } } = await (await fetch(`${API_TO_GET_PRICE_OF_TOKEN}${currency === 'BNB' ? API_ID_OF_BNB : API_ID_OF_ETHEREUM}${API_PARAMETERS}`)).json()

          console.log('# usd => ', usd)
          let web3 = new Web3(provider)
          let web3_signer = new Web3(signer.provider)
          console.log('# web3 => ', web3)
          console.log('# web3_signer => ', web3_signer)
          try {
            // transaction = await web3.eth.sendTransaction({
            //   from: currentAccount,
            //   to: ADMIN_ETH_WALLET_ADDRESS,
            //   value: web3.utils.toHex(web3.utils.toWei(((totalPrice - totalPrice * discountPercentage) / Number(usd)).toFixed(5)))
            //   // parseInt(String((totalPrice - totalPrice * discountPercentage) / Number(usd)))

            // })
            // window.ethereum.request({
            //   method: 'eth_sendTransaction',
            //   params: [{
            //     to: ADMIN_ETH_WALLET_ADDRESS,
            //     from: currentAccount,
            //     value: web3.utils.toHex(web3.utils.toWei("0.5")),
            //   }],
            // })
          } catch (error) {
            console.log('# error => ', error)
          }
        }
      }
      // addNewOrder(
      //   userId,
      //   values.telegramUsername,
      //   values.alternativeTelegramUsername,
      //   totalPrice,
      //   discountPercentage,
      //   totalPrice - totalPrice * discountPercentage
      // )
      closeLoading()
    }
  })

  const handleClose = () => {
    setDialogOpened(false);
  };

  const handleRemoveOrder = (index: number) => {
    removeOrderItemFromCart(index)
  }

  useEffect(() => {
    if (userId) {
      checkWhetherInfluencer(userId)
    }
  }, [userId])

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