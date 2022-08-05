import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField
} from "@mui/material";
import { useState } from "react";
import useWallet from "../../hooks/useWallet";
import { TCurrency } from "../../utils/types";

export interface IProps {
  isOpened: boolean;
  handleClose: Function;
}

export default function DialogConnectWallet({ isOpened, handleClose }: IProps) {
  const { connectWallet } = useWallet()
  const [currency, setCurrency] = useState<TCurrency>('ETH')

  const handleChangeCurrency = (value: string | undefined) => {
    if (value === 'ETH' || value === 'BUSD' || value === 'BNB') {
      setCurrency(value)
    }
  }

  const handleConenctWallet = () => {
    connectWallet(currency)
    handleClose()
  }

  return (
    <Dialog open={isOpened} onClose={() => handleClose()} fullWidth maxWidth="sm">
      <DialogTitle sx={{ py: 2, px: 3 }}>
        Select crypto currency
      </DialogTitle>
      <DialogContent>
        <TextField
          select
          name="currency"
          value={currency}
          onChange={(e) => handleChangeCurrency(e?.target?.value)}
          fullWidth
        >
          <MenuItem value="ETH">ETH</MenuItem>
          <MenuItem value="BUSD">BUSD</MenuItem>
          <MenuItem value="BNB">BNB</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Button onClick={() => handleConenctWallet()} variant="contained">
          Connect
        </Button>
      </DialogActions>
    </Dialog>
  )
}