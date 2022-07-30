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

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  price: number;
  serviceData: ITrendingService;
}

const validSchema = yup.object().shape({
  contractAddress: yup.string().required('Please input the address of contract.')
});

export default function DialogPoocoinOrder({ isOpened, handleClose, price, serviceData }: IProps) {
  const { addOrderToCart } = useOrders()

  const formik = useFormik({
    initialValues: {
      contractAddress: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { contractAddress } = values
      addOrderToCart({
        serviceType: 'trending',
        serviceTitle: serviceData.title,
        price,
        contractAddress
      })
      handleClose()
    }
  })

  return (
    <Dialog open={isOpened} onClose={() => handleClose()} fullWidth maxWidth="sm">
      <DialogTitle sx={{ py: 2, px: 3 }}>
        Please fill in the input fields
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} py={2}>
          <TextField
            name="contractAddress"
            label="Contract address"
            value={formik.values.contractAddress}
            onChange={formik.handleChange}
            error={formik.touched.contractAddress && Boolean(formik.errors.contractAddress)}
            helperText={
              formik.touched.contractAddress && formik.errors.contractAddress ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.contractAddress && formik.errors.contractAddress}
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