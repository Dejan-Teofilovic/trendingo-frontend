import { Container, Typography } from "@mui/material";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../utils/constants";

export default function Influence() {
  return (
    <Container maxWidth="xl">
      <Typography textAlign="center" variant="h4" color={COLOR_PRIMARY}>
        Welcome to visit TREDINGO!
      </Typography>
      <Typography textAlign="center" variant="h6" color={COLOR_WHITE}>
        Please connect wallet to get 10% discount off when you purchase our services.
      </Typography>
    </Container>
  )
}