import { Alert, Snackbar } from "@mui/material";
import useAlertMessage from "../hooks/useAlertMessage";

/* -------------------------------------------------------------------- */

export default function AlertMessage() {
  const { isOpened, severity, message, closeAlert } = useAlertMessage();

  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    closeAlert();
  };
  return (
    <Snackbar
      open={isOpened}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        variant="filled"
        onClose={() => handleClose}
        severity={severity}
        sx={{
          width: "100%",
          color: "white",
          display: isOpened ? "flex" : "none"
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
