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

const renderItem = ({ item }) => {
  return (
    <Slide>
      <BackgroundSlide
        source={{
          uri: item.Poster,
        }}>
        <Description>
          <MovieType>
            {item.Type} - {item.Genre[0]}
          </MovieType>
          <TextSlide>{item.Title}</TextSlide>
          <MovieRuntime>{item.Runtime}</MovieRuntime>
        </Description>
      </BackgroundSlide>
    </Slide>
  );
};

export default function CarouselComponent({ data }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        data={data.originals}
        autoplay
        loop
        keyExtractor={item => item.id}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 50}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.originals.length}
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
