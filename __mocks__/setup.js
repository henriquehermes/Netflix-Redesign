import { NativeModules } from 'react-native';

import MockAsyncStorage from 'mock-async-storage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockStore from './redux-mock-store';

if (typeof window !== 'object') {
  global.window = global;
  global.window.navigator = {};
}

global.mockStore = mockStore;

Enzyme.configure({ adapter: new Adapter() });

jest.autoMockOff();

jest.mock(
  '@react-native-community/async-storage',
  () => new MockAsyncStorage(),
);

NativeModules.RNGestureHandlerModule = {
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
  State: {},
  Directions: {},
};
