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
import { IOrderItem } from '../../utils/interfaces'
import { removeAtMarkPrefix } from "../../utils/functions";

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  orderData: IOrderItem;
}

const validSchema = yup.object().shape({
  dev_order_description: yup.string().required('Please input your request detailer.'),
  telegram_username: yup.string(),
  email: yup.string().email('Please follow email style.').required('Please input your telegram username.')
});

export default function DialogOrder({ isOpened, handleClose, orderData }: IProps) {

  const { orderDevService } = useOrders()

  const formik = useFormik({
    initialValues: {
      dev_order_description: '',
      telegram_username: '',
      email: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { dev_order_description, telegram_username, email } = values
      telegram_username = removeAtMarkPrefix(telegram_username)
      orderDevService({
        dev_order_description,
        telegram_username,
        email
      })
      handleClose()
    }
  })

  return (
    <Dialog open={isOpened} onClose={() => handleClose()} fullWidth maxWidth="sm">
      <DialogTitle sx={{ py: 2, px: 3 }}>
        Please fill in the input field
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} py={2}>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.email && formik.errors.email}
                </Typography>
              ) : (<></>)
            }
          />

          <TextField
            name="telegram_username"
            label="Telegram username"
            value={formik.values.telegram_username}
            onChange={formik.handleChange}
            error={formik.touched.telegram_username && Boolean(formik.errors.telegram_username)}
            helperText={
              formik.touched.telegram_username && formik.errors.telegram_username ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.telegram_username && formik.errors.telegram_username}
                </Typography>
              ) : (<></>)
            }
          />
          <TextField
            multiline
            rows={10}
            name="dev_order_description"
            label="Your request"
            value={formik.values.dev_order_description}
            onChange={formik.handleChange}
            error={formik.touched.dev_order_description && Boolean(formik.errors.dev_order_description)}
            helperText={
              formik.touched.dev_order_description && formik.errors.dev_order_description ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.dev_order_description && formik.errors.dev_order_description}
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