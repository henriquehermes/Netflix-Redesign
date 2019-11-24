import React from 'react';
import { FlatList } from 'react-native';
import {
  Slide,
  TextSlide,
  MovieImage,
  Description,
  MovieType,
  MovieRuntime,
} from './styles';

export default function ContinueWatching({ data, navigation }) {
  return (
    <FlatList
      data={data.watching}
      keyExtractor={item => item.trailerURL}
      renderItem={({ item, index }) => (
        <Slide
          onPress={() => navigation.navigate('Movie')}
          firstIndex={index === 0}
          lastIndex={index === data.watching.length - 1}>
          <MovieImage
            source={{
              uri: item.Poster,
            }}
          />
          <Description>
            <MovieType>
              {item.Type} - {item.Genre[0]}
            </MovieType>
            <TextSlide numberOfLines={1}>{item.Title}</TextSlide>
            <MovieRuntime>{item.Runtime}</MovieRuntime>
          </Description>
        </Slide>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
