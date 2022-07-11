import { useMediaQuery, useTheme } from '@mui/material';

// ----------------------------------------------------------------------

type TDirection = 'up' | 'down';
type TBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IProps {
  breakpoint: TBreakpoint,
  direction: TDirection,
  children: any
}

// ----------------------------------------------------------------------

export default function MHidden({ breakpoint, direction, children }: IProps) {
  const theme = useTheme()

  const hiddenUp = useMediaQuery(theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery(theme.breakpoints.down(breakpoint));

  if (direction === 'down') {
    return hiddenDown ? null : children;
  }

  if (direction === 'up') {
    return hiddenUp ? null : children;
  }

  return null;
}
