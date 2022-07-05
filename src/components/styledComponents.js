import { styled } from '@mui/material/styles';
import { Dialog, Drawer, Button } from '@mui/material';
import { COLOR_PRIMARY } from '../utils/constants';

export const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 25,
    bgColor: COLOR_PRIMARY
  }
});

export const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${COLOR_PRIMARY};
  color: black;
  border-radius: 25px;
  text-transform: capitalize;
  :hover {
    background-color: ${COLOR_PRIMARY};
  } 
`;

export const TextButton = styled(Button)`
  text-transform: capitalize;
`;