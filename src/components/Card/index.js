import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import DEFAULT from '~/store/ducks/constants';
import {
  ItemContainer,
  ItemTitle,
  ItemStudio,
  ItemPoster,
  Column,
  GoDetail,
} from './styles';

export default function Card({ data, navigation }) {
  const dispatch = useDispatch();

  function openDetail(detail) {
    dispatch({ type: DEFAULT.SET_MOVIE, detail });
    navigation.navigate('Movie');
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.Title}
      renderItem={({ item }) => (
        <ItemContainer onPress={() => openDetail(item)}>
          <ItemPoster
            source={{
              uri: item.Poster,
            }}
          />
          <Column>
            <ItemTitle numberOfLines={3}>{item.Title}</ItemTitle>
            <ItemStudio>{item.Released}</ItemStudio>
          </Column>
          <GoDetail />
        </ItemContainer>
      )}
      overScrollMode="never"
    />
  );
}
