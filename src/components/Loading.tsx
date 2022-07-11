import { CircularProgress, DialogContent } from '@mui/material';
import useLoading from '../hooks/useLoading';
import { LoadingDialog } from './styledComponents';

export default function Loading() {
  const { isLoading } = useLoading();
  return (
    <LoadingDialog open={isLoading}>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </LoadingDialog>
  );
}