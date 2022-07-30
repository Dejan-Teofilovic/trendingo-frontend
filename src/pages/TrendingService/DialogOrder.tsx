import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import { Icon } from "@iconify/react";
import useOrders from "../../hooks/useOrders";
import { ITrendingService } from '../../utils/interfaces'
import { useMemo } from "react";

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  price: number;
  serviceData: ITrendingService;
}

const validSchema = yup.object().shape({
  tokenLink: yup.string().required('Please input the link of token.')
});

export default function DialogOrder({ isOpened, handleClose, price, serviceData }: IProps) {
  const { addOrderToCart } = useOrders()

  const formik = useFormik({
    initialValues: {
      tokenLink: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { tokenLink } = values
      addOrderToCart({
        serviceType: 'trending',
        serviceTitle: serviceData.title,
        price,
        tokenLink
      })
      handleClose()
    }
  })

  const valueOfPlaceholder = useMemo(() => {
    switch (serviceData.id) {
      case 1:
        return 'https://www.certik.com/projects/binance'
      case 2:
        return 'https://www.coingecko.com/en/coins/bitcoin'
      case 3:
        return 'https://coinmarketcap.com/currencies/bitcoin/'
      case 4:
        return 'https://crypto.com/price/bnb'
      default:
        return ''
    }
  }, [serviceData.id])


  return (
    <Dialog open={isOpened} onClose={() => handleClose()} fullWidth maxWidth="sm">
      <DialogTitle sx={{ py: 2, px: 3 }}>
        Please fill in the input fields
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} py={2}>
          <TextField
            name="tokenLink"
            label="Token link"
            placeholder={valueOfPlaceholder}
            value={formik.values.tokenLink}
            onChange={formik.handleChange}
            error={formik.touched.tokenLink && Boolean(formik.errors.tokenLink)}
            helperText={
              formik.touched.tokenLink && formik.errors.tokenLink ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.tokenLink && formik.errors.tokenLink}
                </Typography>
              ) : (<></>)
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Button onClick={() => formik?.handleSubmit()} variant="contained">
          Order
        </Button>
      </DialogActions>
    </Dialog>
  )
}