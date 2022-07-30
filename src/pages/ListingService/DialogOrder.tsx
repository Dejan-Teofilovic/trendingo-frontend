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
import useOrders from "../../hooks/useOrders";
import { IListService } from '../../utils/interfaces'
import { Icon } from "@iconify/react";

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  price: number;
  serviceData: IListService
}

const validSchema = yup.object().shape({
  telegramGroupLink: yup.string().required('Please input the link of telegram group.'),
  contractAddress: yup.string().required('Please input the address of contract.')
});

export default function DialogOrder({ isOpened, handleClose, price, serviceData }: IProps) {
  const { addOrderToCart } = useOrders()

  const formik = useFormik({
    initialValues: {
      telegramGroupLink: '',
      contractAddress: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { telegramGroupLink, contractAddress } = values
      addOrderToCart({
        serviceType: 'listing',
        serviceTitle: serviceData.title,
        price,
        telegramGroupLink,
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
            name="telegramGroupLink"
            label="Telegram group link"
            value={formik.values.telegramGroupLink}
            onChange={formik.handleChange}
            error={formik.touched.telegramGroupLink && Boolean(formik.errors.telegramGroupLink)}
            helperText={
              formik.touched.telegramGroupLink && formik.errors.telegramGroupLink ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.telegramGroupLink && formik.errors.telegramGroupLink}
                </Typography>
              ) : (<></>)
            }
          />

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