/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../src/components/Input';

it('renders correctly', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
