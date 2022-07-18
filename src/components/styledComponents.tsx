import { Button, Dialog, styled, Toolbar } from "@mui/material";

export const ToolbarWithoutPaddingX = styled(Toolbar)({
  '&.MuiToolbar-root': {
    paddingLeft: 0,
    paddingRight: 0
  }
})

export const LoadingDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 10
  }
});

export const CapitalButton = styled(Button)`
  text-transform: capitalize;
`