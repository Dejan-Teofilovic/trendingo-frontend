import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ScrollFab from "../components/ScrollFab";
import { COLOR_BACKGROUND } from "../utils/constants";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh' }} bgcolor={COLOR_BACKGROUND}>
      <Stack sx={{ minHeight: 'inherit' }}>
        {/* Header */}
        <Navbar />

        {/* Body */}
        <Stack justifyContent="center" flexGrow={1} py={{ xs: 5, md: 10 }}>
          <Outlet />
        </Stack>

        {/* Footer */}
        <Footer />
      </Stack>

      <ScrollFab />
    </Box>
  )
}