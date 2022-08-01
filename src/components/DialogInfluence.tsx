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
import useUser from "../hooks/useUser";

interface IProps {
  isOpened: boolean;
  handleClose: Function;
}

const validSchema = yup.object().shape({
  yourEmail: yup.string().email('Please follow the style of email.').required('Please input your email.'),
  friendEmail: yup.string().email('Please follow the style of email.').required("Please input your friend's email.")
});

export default function DialogInfluence({ isOpened, handleClose }: IProps) {
  const { userId, influence } = useUser()

  const formik = useFormik({
    initialValues: {
      yourEmail: '',
      friendEmail: ''
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      let { yourEmail, friendEmail } = values
      influence(userId, yourEmail, friendEmail)
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
            name="yourEmail"
            label="Your email"
            value={formik.values.yourEmail}
            onChange={formik.handleChange}
            error={formik.touched.yourEmail && Boolean(formik.errors.yourEmail)}
            helperText={
              formik.touched.yourEmail && formik.errors.yourEmail ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.yourEmail && formik.errors.yourEmail}
                </Typography>
              ) : (<></>)
            }
          />

          <TextField
            name="friendEmail"
            label="Your friend's email"
            value={formik.values.friendEmail}
            onChange={formik.handleChange}
            error={formik.touched.friendEmail && Boolean(formik.errors.friendEmail)}
            helperText={
              formik.touched.friendEmail && formik.errors.friendEmail ? (
                <Typography
                  component="span"
                  sx={{ display: 'flex', alignItems: 'center', mx: 0 }}
                >
                  <Icon icon="bxs:error-alt" />&nbsp;
                  {formik.touched.friendEmail && formik.errors.friendEmail}
                </Typography>
              ) : (<></>)
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Button onClick={() => formik?.handleSubmit()} variant="contained">
          Invite
        </Button>
      </DialogActions>
    </Dialog>
  )
}