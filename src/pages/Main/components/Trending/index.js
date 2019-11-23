import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { Slide, MovieImage } from './styles';

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

const renderItem = ({ index }) => {
  return (
    <Slide firstIndex={index === 0} lastIndex={index === 2}>
      <MovieImage
        source={{
          uri:
            'https://i2.wp.com/mixdeseries.com.br/wp-content/uploads/2019/07/Supernatural-SDCC.jpg?fit=1050%2C600&ssl=1',
        }}
      />
    </Slide>
  );
};

export default function TrendingComponent() {
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
