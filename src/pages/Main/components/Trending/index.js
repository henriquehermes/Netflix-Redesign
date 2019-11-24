import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { Slide, MovieImage } from './styles';

export default function TrendingComponent({ data, navigation }) {
  return (
    <FlatList
      data={data.trending}
      renderItem={({ index, item }) => (
        <Slide
          firstIndex={index === 0}
          lastIndex={index === data.trending.length - 1}
          onPress={() => navigation.navigate('Movie')}>
          <MovieImage
            source={{
              uri: item.Poster,
            }}
          />
        </Slide>
      )}
      keyExtractor={item => item.trailerURL}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
