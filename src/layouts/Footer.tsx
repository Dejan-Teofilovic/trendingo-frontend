import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Typography textAlign="center">
        © {new Date().getFullYear()} React
      </Typography>
    </Box>
  )
}