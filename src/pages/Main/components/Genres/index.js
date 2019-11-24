import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import DRAMA from '~/config/drama.json';
import COMEDY from '~/config/comedy.json';
import CRIME from '~/config/crime.json';
import ROMANCE from '~/config/romance.json';
import ADVENTURE from '~/config/adventure.json';
import FANTASY from '~/config/fantasy.json';
import THRILLER from '~/config/thriller.json';

import DEFAULT from '~/store/ducks/constants';
import { Slide } from './styles';
import Button from '~/components/Button';

export default function GenresComponent({ navigation, data }) {
  const dispatch = useDispatch();

  function openCategory(typeCategory) {
    let listArray = [];
    switch (typeCategory) {
      case 'Drama':
        listArray = DRAMA.list;
        break;
      case 'Comedy':
        listArray = COMEDY.list;
        break;

      case 'Crime':
        listArray = CRIME.list;
        break;

      case 'Romance':
        listArray = ROMANCE.list;
        break;

      case 'Adventure':
        listArray = ADVENTURE.list;
        break;

      case 'Fantasy':
        listArray = FANTASY.list;
        break;

      case 'Thriller':
        listArray = THRILLER.list;
        break;

      default:
    }
    dispatch({ type: DEFAULT.SET_CATEGORY, typeCategory, data: listArray });
    navigation.navigate('Category');
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Slide firstIndex={index === 0} lastIndex={index === data.length - 1}>
          <Button label={item.type} onPress={() => openCategory(item.type)} />
        </Slide>
      )}
      horizontal
      keyExtractor={({ index }) => index}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
