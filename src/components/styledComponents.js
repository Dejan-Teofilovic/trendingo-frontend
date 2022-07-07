import { styled } from '@mui/material/styles';
import { Dialog, Drawer, Button, TextField } from '@mui/material';
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

export const FilterTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    fontSize: 14,
    padding: 10
  },
  '& .MuiInputLabel-root': {
    fontSize: 14,
    transform: 'translate(14px, 12px) scale(1)'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    fontSize: 17,
    transform: 'translate(14px, -9px) scale(0.75)'
  },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    fontSize: 17,
    transform: 'translate(14px, -9px) scale(0.75)'
  }
});