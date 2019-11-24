/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SplashController from '../../src/pages/Splash/SplashController';

const fakeLoginInApp = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<SplashController navigation={fakeLoginInApp} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
