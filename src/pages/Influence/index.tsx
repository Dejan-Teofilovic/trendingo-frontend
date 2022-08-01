import { 
  Box, 
  Button, 
  Container, 
  MenuItem, 
  Paper, 
  Stack, 
  TextField, 
  Typography 
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import useWallet from "../../hooks/useWallet";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants";
import { TCurrency } from "../../utils/types";

export default function Influence() {
  const { influenceToken } = useParams()
  const { currentAccount, connectWallet, disconnectWallet } = useWallet()

  const [currency, setCurrency] = useState<TCurrency>('ETH')

  const handleChangeCurrency = (value: string | undefined) => {
    if (value === 'ETH' || value === 'BUSD' || value === 'BNB') {
      setCurrency(value)
    }
  }

  const handleConenctWallet = () => {
    connectWallet(currency, influenceToken)
  }

  return (
    <Container maxWidth="xl">
      <Paper elevation={12} sx={{ py: { md: 12, sm: 6, xs: 12 }, px: 1 }}>
        <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
          Welcome to visit TREDINGO!
        </Typography>
        <Typography textAlign="center" variant="h6" color={COLOR_WHITE} mt={2}>
          Please connect wallet to get 10% discount off when you purchase our services.
        </Typography>

        {
          currentAccount ? (
            <Stack spacing={2} alignItems="center" mt={5}>
              <Stack direction="row" alignItems="center">
                <Typography component="span" variant="body1" fontWeight={700}>
                  Currency:&nbsp;&nbsp;&nbsp;
                </Typography>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Box
                    component="img"
                    src={`/assets/images/${currency.toLowerCase()}.png`}
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

              <Button variant="contained" onClick={() => disconnectWallet()}>
                Disconnect
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} mt={5}>
              <TextField
                select
                name="currency"
                value={currency}
                onChange={(e) => handleChangeCurrency(e?.target?.value)}
              >
                <MenuItem value="ETH">ETH</MenuItem>
                <MenuItem value="BUSD">BUSD</MenuItem>
                <MenuItem value="BNB">BNB</MenuItem>
              </TextField>

              <Button variant="contained" onClick={() => handleConenctWallet()}>
                Connect wallet
              </Button>
            </Stack>
          )
        }
      </Paper>

    </Container>
  )
}