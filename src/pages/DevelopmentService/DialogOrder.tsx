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
import { IDevelopmentService } from '../../utils/interfaces'

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  price: number;
  serviceData: IDevelopmentService;
}

const validSchema = yup.object().shape({
  dev_order_description: yup.string().required('Please input your request detailer.')
});

export default function DialogOrder({ isOpened, handleClose, price, serviceData }: IProps) {
  const { addOrderItemToCart } = useOrders()

  const formik = useFormik({
    initialValues: {
      dev_order_description: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { dev_order_description } = values
      addOrderItemToCart({
        service_type: 'development',
        service_title: serviceData.title,
        price,
        dev_order_description
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
            multiline
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