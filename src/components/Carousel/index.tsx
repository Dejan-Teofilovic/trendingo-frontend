import React, { useRef, createElement } from 'react';
import { styled } from "@mui/material";
import Slider from 'react-slick';
import CarouselControlArrows from './CarouselControlArrows';

/* -------------------------------------------------------------- */

interface IProps {
  data: Array<object>,
  slideSettings: object,
  carouselItemComponent: React.ComponentType<{ key: number, dataItem: object }>
}

/* -------------------------------------------------------------- */

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative'
}));

/* -------------------------------------------------------------- */

export default function Carousel({ data, slideSettings, carouselItemComponent }: IProps) {
  const carouselRef = useRef<Slider>(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...slideSettings}>
        {data.map((dataItem, index) => (
          createElement(carouselItemComponent, {
            key: index,
            dataItem
          })
        ))}
      </Slider>
      <CarouselControlArrows onNext={handleNext} onPrevious={handlePrevious} />
    </RootStyle>
  );
}