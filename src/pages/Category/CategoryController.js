import React from 'react';

import { useSelector } from 'react-redux';
import CategoryComponent from './CategoryComponent';

export default function CategoryController({ navigation }) {
  const detailCategory = useSelector(state => state.category);

  return (
    <CategoryComponent
      detailCategory={detailCategory}
      navigation={navigation}
    />
  );
}
