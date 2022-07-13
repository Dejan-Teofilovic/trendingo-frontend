import { Box, Typography, useTheme } from "@mui/material";
import { COLOR_WHITE } from "../utils/constants";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box py={2} bgcolor={theme.palette.primary.main}>
      <Typography textAlign="center" color={COLOR_WHITE}>
        © {new Date().getFullYear()} React
      </Typography>
    </Box>
  )
}