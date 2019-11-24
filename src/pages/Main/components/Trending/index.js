import React from 'react';

import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import DEFAULT from '~/store/ducks/constants';
import { Slide, MovieImage } from './styles';

export default function TrendingComponent({ data, navigation }) {
  const dispatch = useDispatch();

  function openDetail(detail) {
    dispatch({ type: DEFAULT.SET_MOVIE, detail });
    navigation.navigate('Movie');
  }

  return (
    <FlatList
      data={data}
      renderItem={({ index, item }) => (
        <Slide
          firstIndex={index === 0}
          lastIndex={index === data.length - 1}
          testID="SlideClick"
          onPress={() => openDetail(item)}>
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
