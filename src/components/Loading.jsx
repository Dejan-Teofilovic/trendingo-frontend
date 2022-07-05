import React from 'react';
import { CircularProgress, DialogContent } from '@mui/material';
import useLoading from '../hooks/useLoading';
import { COLOR_PRIMARY } from '../utils/constants';
import { CustomDialog } from '../components/styledComponents';

export default function Loading() {
  const { isLoading } = useLoading();
  return (
    <CustomDialog open={isLoading}>
      <DialogContent sx={{ bgcolor: COLOR_PRIMARY }}>
        <CircularProgress sx={{ color: 'black' }} />
      </DialogContent>
    </CustomDialog>
  );
}