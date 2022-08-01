import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import DialogInfluence from "../components/DialogInfluence";
import InfluenceFab from "../components/InfluenceFab";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import ScrollFab from "../components/ScrollFab";
import useWallet from "../hooks/useWallet";
import { COLOR_BACKGROUND } from "../utils/constants";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  const { currentAccount } = useWallet()

  const [dialogOpened, setDialogOpened] = useState(false)
  const handleClose = () => {
    setDialogOpened(false);
  };
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

      {currentAccount && (
        <>
          <InfluenceFab onClick={() => setDialogOpened(true)} />
          <DialogInfluence isOpened={dialogOpened} handleClose={handleClose} />
        </>
      )}
    </Box>
  )
}