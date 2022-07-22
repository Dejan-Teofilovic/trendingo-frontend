import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ScrollFab from "../components/ScrollFab";
import { COLOR_BACKGROUND } from "../utils/constants";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh' }} position="relative" bgcolor={COLOR_BACKGROUND}>
      <Stack sx={{ minHeight: 'inherit' }} position="relative" zIndex={20}>
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

      {/* <Box position="absolute" width={200} height={200} zIndex={10} top={0}>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_2rv3cthg.json"
          style={{ width: '100px', height: '100px' }}
          speed={1}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </Box> */}
    </Box>
  )
}