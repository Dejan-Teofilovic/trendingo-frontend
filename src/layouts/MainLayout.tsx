import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
import ScrollFab from "../components/ScrollFab";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Stack sx={{ minHeight: 'inherit' }}>
        {/* Header */}
        <Navbar />

        {/* Body */}
        <Box flexGrow={1}>
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Stack>
      <ScrollFab />
    </Box>
  )
}