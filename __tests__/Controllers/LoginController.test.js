/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LoginController from '../../src/pages/Login/LoginController';

const fakeLoginInApp = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<LoginController navigation={fakeLoginInApp} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
