import React, { useState } from 'react';
import { api } from '../../utils/config';
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: `${api.baseURL}/images/slider/slider1.jpg`,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: `${api.baseURL}/images/slider/slider2.jpg`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },{
    src: `${api.baseURL}/images/slider/slider3.jpg`,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },{
    src: `${api.baseURL}/images/slider/slider4.jpg`,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },{
    src: `${api.baseURL}/images/slider/slider5.jpg`,
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <ProgressiveImage  preview={item.src} image={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
