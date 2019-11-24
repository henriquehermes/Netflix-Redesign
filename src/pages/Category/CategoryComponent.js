import React from 'react';

import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import DEFAULT from '~/store/ducks/constants';
import {
  Container,
  Header,
  Title,
  ArrowLeft,
  ItemContainer,
  ItemPoster,
  ItemTitle,
  Column,
  ItemStudio,
  GoDetail,
} from './CategoryStyles';

export default function CategoryComponent({ navigation, detailCategory }) {
  const dispatch = useDispatch();

  function openDetail(detail) {
    dispatch({ type: DEFAULT.SET_MOVIE, detail });
    navigation.navigate('Movie');
  }

  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <Title>{detailCategory.typeCategory}</Title>
      </Header>
      <FlatList
        data={detailCategory.data}
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
    </Container>
  );
}
