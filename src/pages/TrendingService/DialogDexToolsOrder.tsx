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
import { IOrderItem } from '../../utils/interfaces';

interface IProps {
  isOpened: boolean;
  handleClose: Function;
  orderData: IOrderItem;
}

const validSchema = yup.object().shape({
  token_pair_link: yup.string().required('Please input the link of token pair.'),
  contract_address: yup.string().required('Please input the address of contract.')
});

export default function DialogDexToolsOrder({ isOpened, handleClose, orderData }: IProps) {
  const { addOrderItemToCart } = useOrders()

  const formik = useFormik({
    initialValues: {
      token_pair_link: '',
      contract_address: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { token_pair_link, contract_address } = values
      addOrderItemToCart({
        ...orderData,
        token_pair_link,
        contract_address
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
            name="token_pair_link"
            label="Token pair link"
            placeholder="https://www.dextools.io/app/ether/pair-explorer/0x11cb9e028b82eee75443fdc27929b9c49736c552"
            value={formik.values.token_pair_link}
            onChange={formik.handleChange}
            error={formik.touched.token_pair_link && Boolean(formik.errors.token_pair_link)}
            helperText={
              formik.touched.token_pair_link && formik.errors.token_pair_link ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.token_pair_link && formik.errors.token_pair_link}
                </Typography>
              ) : (<></>)
            }
          />

          <TextField
            name="contract_address"
            label="Contract address"
            value={formik.values.contract_address}
            onChange={formik.handleChange}
            error={formik.touched.contract_address && Boolean(formik.errors.contract_address)}
            helperText={
              formik.touched.contract_address && formik.errors.contract_address ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.contract_address && formik.errors.contract_address}
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