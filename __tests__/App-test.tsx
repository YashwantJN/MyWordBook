/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer, {act} from 'react-test-renderer';

jest.mock('react-native-sound', () => {
  return {
    Sound: jest.fn(),
  };
});

describe('App Module', () => {
  test('app renders correctly for un-auth', async () => {
    jest.mock('../context/Auth.context', () => {
      return {
        useAuth: jest.fn(() => {
          return {
            isAuthenticated: false,
          };
        }),
      };
    });
    const tree = renderer.create(<App />).toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
