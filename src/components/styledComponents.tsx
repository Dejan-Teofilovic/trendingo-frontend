import { styled, Toolbar } from "@mui/material";

export const ToolbarWithoutPaddingX = styled(Toolbar)({
  '&.MuiToolbar-root': {
    paddingLeft: 0,
    paddingRight: 0
  }
})