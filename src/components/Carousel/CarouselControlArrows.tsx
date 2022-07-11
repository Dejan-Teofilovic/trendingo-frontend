import { Box, IconButton, styled } from '@mui/material';
import { Icon } from '@iconify/react';
import { COLOR_BLACK, COLOR_WHITE } from '../../utils/constants';

// ----------------------------------------------------------------------

interface IProps {
  onNext: Function,
  onPrevious: Function
}

// ----------------------------------------------------------------------

const CIRCLE_SIZE = 48;

const ICON_SIZE = {
  width: 30,
  height: 30
};

const RootStyle = styled(Box)(({ theme }) => ({
  top: 0,
  bottom: 0,
  zIndex: 9,
  height: CIRCLE_SIZE,
  width: 'calc(100% + 30px)',
  transform: 'translate(-15px, 20px)',
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  justifyContent: 'space-between'
}));

const ArrowStyle = styled(IconButton)({
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  color: COLOR_BLACK,
  background: COLOR_WHITE,
  borderRadius: '50%',
  boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.27)',
  '&:hover': {
    opacity: 1,
    background: COLOR_BLACK,
    color: COLOR_WHITE,
  }
});

// ----------------------------------------------------------------------

export default function CarouselControlArrows({ onNext, onPrevious }: IProps) {
  return (
    <RootStyle>
      <ArrowStyle size="small" onClick={() => onPrevious}>
        <Icon icon="eva:arrow-ios-back-fill" {...ICON_SIZE} />
      </ArrowStyle>

      <ArrowStyle size="small" onClick={() => onNext}>
        <Icon icon="eva:arrow-ios-forward-fill" {...ICON_SIZE} />
      </ArrowStyle>
    </RootStyle>
  );
}
