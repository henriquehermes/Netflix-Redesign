import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import DEFAULT from '~/store/ducks/constants';
import { Slide } from './styles';
import Button from '~/components/Button';

const DATA = [
  {
    name: 'Action',
  },
  {
    name: 'Adventure',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Comedy',
  },
];

export default function GenresComponent({ navigation }) {
  const dispatch = useDispatch();

  function openCategory(typeCategory, data) {
    dispatch({ type: DEFAULT.SET_CATEGORY, typeCategory, data });
    navigation.navigate('Category');
  }

  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => (
        <Slide firstIndex={index === 0} lastIndex={index === 3} key={index}>
          <Button
            label={item.name}
            onPress={() => openCategory(item.name, [])}
          />
        </Slide>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
