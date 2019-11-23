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

export default function TrendingComponent({ navigation }) {
  return (
    <FlatList
      data={DATA}
      renderItem={({ index }) => (
        <Slide
          firstIndex={index === 0}
          lastIndex={index === 2}
          onPress={() => navigation.navigate('Movie')}>
          <MovieImage
            source={{
              uri:
                'https://i2.wp.com/mixdeseries.com.br/wp-content/uploads/2019/07/Supernatural-SDCC.jpg?fit=1050%2C600&ssl=1',
            }}
          />
        </Slide>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
