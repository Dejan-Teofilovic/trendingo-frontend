import { Fab, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';

interface IProps {
  onClick: Function;
}

export default function InfluenceFab({ onClick }: IProps) {
  const theme = useTheme()
  return (
    <Fab
      size="small"
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 1,
        backgroundColor: theme.palette.primary.main,
        fontSize: 20
      }}
      onClick={() => onClick()}
    >
      <Icon icon="flat-color-icons:invite" />
    </Fab>
  );
}