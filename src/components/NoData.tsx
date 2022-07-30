import { Stack, Typography, Icon as MuiIcon } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

interface IProps {
  text: string
}

export default function NoData({ text }: IProps) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" p={6} spacing={3}>
      <MuiIcon sx={{ fontSize: { xs: 18, sm: 24, md: 42 }, color: grey[700] }}>
        <Icon icon="mdi:database-remove" />
      </MuiIcon>
      <Typography
        variant="h4"
        fontWeight={900}
        color={grey[700]}
      >
        {text}
      </Typography>
    </Stack>
  );
}