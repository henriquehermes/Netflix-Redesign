import Carousel, { Pagination } from 'react-native-snap-carousel';

import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import {
  Slide,
  TextSlide,
  BackgroundSlide,
  Description,
  MovieType,
  MovieRuntime,
} from './styles';

const { width } = Dimensions.get('window');
const DATA = [
  {
    teste: true,
  },
  {
    teste: true,
  },
  {
    teste: true,
  },
];

const renderItem = () => {
  return (
    <Slide>
      <BackgroundSlide
        source={{
          uri:
            'https://www.calltheone.com/storage/blog/2/2018/09/19/the-defenders_orig.jpeg',
        }}>
        <Description>
          <MovieType>Movie - Action</MovieType>
          <TextSlide>Marvels The Defenders</TextSlide>
          <MovieRuntime>106 min</MovieRuntime>
        </Description>
      </BackgroundSlide>
    </Slide>
  );
};

export default function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        data={DATA}
        autoplay
        loop
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 50}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          height: 15,
          paddingVertical: 0,
          marginBottom: 15,
        }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#fff',
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.6}
      />
    </>
  );
}
